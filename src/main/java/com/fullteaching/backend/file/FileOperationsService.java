package com.fullteaching.backend.file;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.DirectoryNotEmptyException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.amazonaws.AmazonClientException;
import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.GetObjectRequest;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.services.s3.transfer.TransferManager;
import com.amazonaws.services.s3.transfer.Upload;
import com.fullteaching.backend.filegroup.FileGroup;

@Service
public class FileOperationsService {

	private static final Logger log = LoggerFactory.getLogger(FileOperationsService.class);

	@Autowired
	public static AmazonS3 amazonS3;

	@Value("${aws.namecard.bucket}")
	public static String bucketAWS;

	public void deleteLocalFile(String fileName, Path folder) {
		log.info("Deleting local temp file '{}'", Paths.get(folder.toString(), fileName));
		// Deleting stored file...
		try {
			Path path = Paths.get(folder.toString(), fileName);
			Files.delete(path);
			log.info("Local temp file '{}' successfully deleted", Paths.get(folder.toString(), fileName));
		} catch (NoSuchFileException x) {
			log.error("No such file '{}' or directory '{}'", fileName, Paths.get(folder.toString()));
		} catch (DirectoryNotEmptyException x) {
			log.error("Directory '{}' not empty", Paths.get(folder.toString()));
		} catch (IOException x) {
			// File permission problems are caught here
			log.error("Permission error: {}", x.toString());
		}
	}

	public void deleteRemoteFile(String fileName, String s3Folder) {
		log.info("Deleting remote file in S3: folder '{}', file '{}'", s3Folder, fileName);
		String bucketName = bucketAWS + s3Folder;
		try {
			amazonS3.deleteObject(new DeleteObjectRequest(bucketName, fileName));
			log.info("S3 DELETION: File " + fileName + " successfully deleted");
		} catch (AmazonServiceException ase) {
			log.info("Caught an AmazonServiceException.");
			log.info("Error Message:    " + ase.getMessage());
			log.info("HTTP Status Code: " + ase.getStatusCode());
			log.info("AWS Error Code:   " + ase.getErrorCode());
			log.info("Error Type:       " + ase.getErrorType());
			log.info("Request ID:       " + ase.getRequestId());
		} catch (AmazonClientException ace) {
			log.info("Caught an AmazonClientException.");
			log.info("Error Message: " + ace.getMessage());
		}
	}

	// Deletes all the real locally stored files given a list of FileGroups
	public void recursiveLocallyStoredFileDeletion(List<FileGroup> fileGroup) {
		log.info("Recursive deletion of all files in children filegroups");
		if (fileGroup != null) {
			for (FileGroup fg : fileGroup) {
				for (com.fullteaching.backend.file.File f : fg.getFiles()) {
					this.deleteLocalFile(f.getNameIdent(), FileController.FILES_FOLDER);
				}
				this.recursiveLocallyStoredFileDeletion(fg.getFileGroups());
			}
		}
		return;
	}

	// Deletes all the real S3 stored files given a list of FileGroups
	public void recursiveS3StoredFileDeletion(List<FileGroup> fileGroup) {
		if (fileGroup != null) {
			for (FileGroup fg : fileGroup) {
				for (com.fullteaching.backend.file.File f : fg.getFiles()) {
					this.deleteRemoteFile(f.getNameIdent(), "/files");
				}
				this.recursiveS3StoredFileDeletion(fg.getFileGroups());
			}
		}
		return;
	}
	
	public void productionFileSaver(String keyName, String folderName, File f) throws InterruptedException {
		
		log.info("Uploading an object to S3");
		
		String bucketName = bucketAWS + "/" + folderName;
		TransferManager tm = new TransferManager(amazonS3);        
        // TransferManager processes all transfers asynchronously, so this call will return immediately
        Upload upload = tm.upload(bucketName, keyName, f);
        try {
        	// Or you can block and wait for the upload to finish
        	upload.waitForCompletion();
        	log.info("Upload completed");
        } catch (AmazonClientException amazonClientException) {
        	log.error("Unable to upload file, upload was aborted.");
        	amazonClientException.printStackTrace();
        }
    }
	
	public void productionFileDownloader(String fileName, HttpServletResponse response) {
		String bucketName = bucketAWS + "/files";
        try {
            log.info("Downloading an object from S3");
            S3Object s3object = amazonS3.getObject(new GetObjectRequest(bucketName, fileName));
            log.info("Content-Type: "  + s3object.getObjectMetadata().getContentType());
            
            if (s3object != null) {
    			try {
    				String fileExt = this.getFileExtension(fileName);
    				response.setContentType(MimeTypes.getMimeType(fileExt));
    				InputStream objectData = s3object.getObjectContent();
    				IOUtils.copy(objectData, response.getOutputStream());
    				response.flushBuffer();
    				objectData.close();
    			} catch (IOException ex) {
    				throw new RuntimeException("IOError writing file to output stream");
    			}
    		}
            
        } catch (AmazonServiceException ase) {
            log.error("Caught an AmazonServiceException, which" +
            		" means your request made it " +
                    "to Amazon S3, but was rejected with an error response" +
                    " for some reason.");
            log.error("Error Message:    " + ase.getMessage());
            log.error("HTTP Status Code: " + ase.getStatusCode());
            log.error("AWS Error Code:   " + ase.getErrorCode());
            log.error("Error Type:       " + ase.getErrorType());
            log.error("Request ID:       " + ase.getRequestId());
        } catch (AmazonClientException ace) {
        	log.error("Caught an AmazonClientException, which means"+
            		" the client encountered " +
                    "an internal error while trying to " +
                    "communicate with S3, " +
                    "such as not being able to access the network.");
        	log.error("Error Message: " + ace.getMessage());
        }
    }
	
	public void productionFileDeletion (String fileName, String s3Folder){
		String bucketName = bucketAWS + s3Folder;
        try {
        	amazonS3.deleteObject(new DeleteObjectRequest(bucketName, fileName));
        	log.info("S3 DELETION: File " + fileName + " deleted successfully");
        } catch (AmazonServiceException ase) {
        	log.error("Caught an AmazonServiceException.");
        	log.error("Error Message:    " + ase.getMessage());
        	log.error("HTTP Status Code: " + ase.getStatusCode());
        	log.error("AWS Error Code:   " + ase.getErrorCode());
        	log.error("Error Type:       " + ase.getErrorType());
        	log.error("Request ID:       " + ase.getRequestId());
        } catch (AmazonClientException ace) {
        	log.error("Caught an AmazonClientException.");
        	log.error("Error Message: " + ace.getMessage());
        }
	}
	
	public String getFileNameFromURL(String url){
		return (url.substring(url.lastIndexOf('/') + 1));
	}
	
	private String getFileExtension(String name) {
		return name.substring(name.lastIndexOf('.') + 1);
	}

	public String getEncodedPictureName(String originalFileName) {
		// Getting the image extension
		String picExtension = this.getFileExtension(originalFileName);
		// Appending a random integer to the name
		originalFileName += (Math.random() * (Integer.MIN_VALUE - Integer.MAX_VALUE));
		// Encoding original file name + random integer
		originalFileName = new BCryptPasswordEncoder().encode(originalFileName);
		// Deleting all non alphanumeric characters
		originalFileName = originalFileName.replaceAll("[^A-Za-z0-9\\$]", "");
		// Adding the extension
		originalFileName += "." + picExtension;
		return originalFileName;
	}

}
