package com.fullteaching.backend.file;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Iterator;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.beans.factory.annotation.Value;

import com.fullteaching.backend.comment.Comment;
import com.fullteaching.backend.comment.CommentRepository;
import com.fullteaching.backend.course.Course;
import com.fullteaching.backend.course.CourseRepository;
import com.fullteaching.backend.filegroup.FileGroup;
import com.fullteaching.backend.filegroup.FileGroupRepository;
import com.fullteaching.backend.security.AuthorizationService;
import com.fullteaching.backend.user.User;
import com.fullteaching.backend.user.UserRepository;
import com.fullteaching.backend.user.UserComponent;

@RestController
@RequestMapping("/api-load-files")
public class FileController {

	private static final Logger log = LoggerFactory.getLogger(FileController.class);

	@Autowired
	private FileGroupRepository fileGroupRepository;

	@Autowired
	private FileRepository fileRepository;

	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private CommentRepository commentRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private UserComponent user;

	@Autowired
	private AuthorizationService authorizationService;

	@Autowired
	private FileOperationsService fileOperationsService;

	@Value("${profile.stage}")
	private String profileStage;

	public static final Path FILES_FOLDER = Paths.get(System.getProperty("user.dir"), "/assets/files");
	public static final Path VIDEOS_FOLDER = Paths.get(System.getProperty("user.dir"), "/assets/videos");
	public static final Path PICTURES_FOLDER = Paths.get(System.getProperty("user.dir"), "/assets/pictures");

	@RequestMapping(value = "/upload/course/{courseId}/file-group/{fileGroupId}", method = RequestMethod.POST)
	public ResponseEntity<Object> handleFileUpload(MultipartHttpServletRequest request,
			@PathVariable(value = "courseId") String courseId, @PathVariable(value = "fileGroupId") String fileGroupId)
			throws IOException {

		log.info("Uploading file...");

		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null) {
			return authorized;
		}

		long id_course = -1;
		long id_fileGroup = -1;
		try {
			id_course = Long.parseLong(courseId);
			id_fileGroup = Long.parseLong(fileGroupId);
		} catch (NumberFormatException e) {
			log.error("Course ID '{}' or FileGroup ID '{}' are not of type Long", courseId, fileGroupId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Course c = courseRepository.findOne(id_course);

		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {

			FileGroup fg = null;
			Iterator<String> i = request.getFileNames();
			while (i.hasNext()) {

				String name = i.next();

				log.info("File name: '{}'", name);

				MultipartFile file = request.getFile(name);
				String fileName = file.getOriginalFilename();

				log.info("File full name: " + fileName);

				if (file.isEmpty()) {
					log.error("The file is empty");
					throw new RuntimeException("The file is empty");
				}

				if (!Files.exists(FILES_FOLDER)) {
					log.debug("Creating folder '{}'", FILES_FOLDER);
					Files.createDirectories(FILES_FOLDER);
				}

				com.fullteaching.backend.file.File customFile = new com.fullteaching.backend.file.File(1, fileName);
				File uploadedFile = new File(FILES_FOLDER.toFile(), customFile.getNameIdent());

				file.transferTo(uploadedFile);

				if (this.isProductionStage()) {
					// ONLY ON PRODUCTION
					try {
						fileOperationsService.productionFileSaver(customFile.getNameIdent(), "files", uploadedFile);
					} catch (InterruptedException e) {
						fileOperationsService.deleteLocalFile(uploadedFile.getName(), FILES_FOLDER);
						e.printStackTrace();
					}
					customFile.setLink("https://" + FileOperationsService.bucketAWS + ".s3.amazonaws.com/files/"
							+ customFile.getNameIdent());
					fileOperationsService.deleteLocalFile(uploadedFile.getName(), FILES_FOLDER);
					// ONLY ON PRODUCTION
				} else {
					// ONLY ON DEVELOPMENT
					customFile.setLink(uploadedFile.getPath());
					// ONLY ON DEVELOPMENT
				}
				fg = fileGroupRepository.findOne(id_fileGroup);
				fg.getFiles().add(customFile);
				fg.updateFileIndexOrder();
				log.info("File succesfully uploaded to path '{}'", uploadedFile.getPath());
			}

			fileGroupRepository.save(fg);
			return new ResponseEntity<>(this.getRootFileGroup(fg), HttpStatus.CREATED);
		}
	}

	@RequestMapping("/course/{courseId}/download/{fileId}")
	public void handleFileDownload(@PathVariable String fileId, @PathVariable(value = "courseId") String courseId,
			HttpServletResponse response) throws FileNotFoundException, IOException {
		
		log.info("Downloading file...");

		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null) {
			response.sendError(401, "Not logged");
			return;
		}

		long id_course = -1;
		long id_file = -1;
		try {
			id_course = Long.parseLong(courseId);
			id_file = Long.parseLong(fileId);
		} catch (NumberFormatException e) {
			log.error("Course ID '{}' or File ID '{}' are not of type Long", courseId, fileId);
			response.sendError(422, "Invalid format");
			return;
		}

		Course c = courseRepository.findOne(id_course);

		ResponseEntity<Object> userAuthorized = authorizationService.checkAuthorizationUsers(c, c.getAttenders());
		if (userAuthorized != null) { // If the user is not an attender of the course
			response.sendError(401, "Unauthorized");
			return;
		} else {

			com.fullteaching.backend.file.File f = fileRepository.findOne(id_file);

			if (f != null) {
				
				log.info("File name: '{}'", f.getName());
				
				if (this.isProductionStage()) {
					// ONLY ON PRODUCTION
					fileOperationsService.productionFileDownloader(f.getNameIdent(), response);
					// ONLY ON PRODUCTION
				} else {
					// ONLY ON DEVELOPMENT
					Path file = FILES_FOLDER.resolve(f.getNameIdent());

					if (Files.exists(file)) {
						try {
							String fileExt = f.getFileExtension();
							response.setContentType(MimeTypes.getMimeType(fileExt));

							// get your file as InputStream
							InputStream is = new FileInputStream(file.toString());
							// copy it to response's OutputStream
							IOUtils.copy(is, response.getOutputStream());
							response.flushBuffer();
							
							log.info("File '{}' succesfully downloaded", f.getName());
						} catch (IOException ex) {
							throw new RuntimeException("IOError writing file to output stream");
						}

					} else {
						log.error("File '{}' does not exist and cannot be downloaded", f.getName());
						response.sendError(404,
								"File" + f.getNameIdent() + "(" + file.toAbsolutePath() + ") does not exist");
					}
					// ONLY ON DEVELOPMENT
				}
			}
		}
	}

	@RequestMapping(value = "/upload/picture/{userId}", method = RequestMethod.POST)
	public ResponseEntity<Object> handlePictureUpload(MultipartHttpServletRequest request,
			@PathVariable(value = "userId") String userId) throws IOException {
		
		log.info("Uploading picture...");

		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null) {
			return authorized;
		}

		long id_user = -1;
		try {
			id_user = Long.parseLong(userId);
		} catch (NumberFormatException e) {
			log.error("User ID '{}' is not of type Long", userId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		User u = userRepository.findOne(id_user);

		ResponseEntity<Object> userAuthorized = authorizationService.checkAuthorization(u, this.user.getLoggedUser());
		if (userAuthorized != null) { // If the user is not the teacher of the course
			return userAuthorized;
		} else {

			Iterator<String> i = request.getFileNames();
			while (i.hasNext()) {
				String name = i.next();
				
				log.info("File name: '{}'", name);
				
				MultipartFile file = request.getFile(name);
				
				log.info("File original name: " + file.getOriginalFilename());

				if (file.isEmpty()) {
					log.error("File is empty");
					throw new RuntimeException("The picture is empty");
				}

				if (!Files.exists(PICTURES_FOLDER)) {
					log.debug("Creating folder '{}'", PICTURES_FOLDER);
					Files.createDirectories(PICTURES_FOLDER);
				}

				String encodedName = fileOperationsService.getEncodedPictureName(file.getOriginalFilename());

				File uploadedPicture = new File(PICTURES_FOLDER.toFile(), encodedName);
				file.transferTo(uploadedPicture);

				if (this.isProductionStage()) {
					// ONLY ON PRODUCTION
					try {
						fileOperationsService.productionFileSaver(encodedName, "pictures", uploadedPicture);
					} catch (InterruptedException e) {
						// TODO Auto-generated catch block
						fileOperationsService.deleteLocalFile(uploadedPicture.getName(), PICTURES_FOLDER);
						e.printStackTrace();
					}
					fileOperationsService.deleteLocalFile(uploadedPicture.getName(), PICTURES_FOLDER);
					fileOperationsService.productionFileDeletion(
							fileOperationsService.getFileNameFromURL(u.getPicture()), "/pictures");
					u.setPicture(
							"https://" + FileOperationsService.bucketAWS + ".s3.amazonaws.com/pictures/" + encodedName);
					// ONLY ON PRODUCTION
				} else {
					// ONLY ON DEVELOPMENT
					fileOperationsService.deleteLocalFile(fileOperationsService.getFileNameFromURL(u.getPicture()),
							PICTURES_FOLDER);
					u.setPicture("/assets/pictures/" + uploadedPicture.getName());

					log.info("Picture succesfully uploaded to path '{}'", uploadedPicture.getPath());
					// ONLY ON DEVELOPMENT
				}

				userRepository.save(u);

				// Update current logged user picture
				this.user.getLoggedUser().setPicture(u.getPicture());
			}

			return new ResponseEntity<>(u.getPicture(), HttpStatus.CREATED);
		}
	}
	
	@RequestMapping(value = "/upload/course/{courseId}/comment/{commentId}", method = RequestMethod.POST)
	public ResponseEntity<Object> handleVideoMessageUpload(MultipartHttpServletRequest request,
			@PathVariable(value = "courseId") String courseId, @PathVariable(value = "commentId") String commentId)
			throws IOException {

		log.info("Uploading video message...");

		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null) {
			return authorized;
		}

		long id_course = -1;
		long id_comment = -1;
		try {
			id_course = Long.parseLong(courseId);
			id_comment = Long.parseLong(commentId);
		} catch (NumberFormatException e) {
			log.error("Course ID '{}' or Comment ID '{}' are not of type Long", courseId, commentId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Course c = courseRepository.findOne(id_course);
		Comment comment = commentRepository.findOne(id_comment);

		ResponseEntity<Object> userAuthorized = authorizationService.checkAuthorizationUsers(c, c.getAttenders());
		if (userAuthorized != null) { // If the user is not an attender of the course
			return userAuthorized;
		} else {
			if (comment != null) {
				userAuthorized = authorizationService.checkAuthorization(comment, comment.getUser());
				if (userAuthorized != null) { // If the user is not the author of the comment
					return userAuthorized;
				} else {
					
					Iterator<String> i = request.getFileNames();
					while (i.hasNext()) {
	
						String name = i.next();
	
						log.info("Video file name: '{}'", name);
	
						MultipartFile file = request.getFile(name);
						String fileName = file.getOriginalFilename();
	
						log.info("Video file full name: " + fileName);
	
						if (file.isEmpty()) {
							log.error("The video file is empty");
							throw new RuntimeException("The video file is empty");
						}
	
						if (!Files.exists(VIDEOS_FOLDER)) {
							log.debug("Creating folder '{}'", VIDEOS_FOLDER);
							Files.createDirectories(VIDEOS_FOLDER);
						}
						
						String finalName = "video-comment-" + id_comment + ".webm";
						log.info("Video file final name: " + finalName);
						File uploadedFile = new File(VIDEOS_FOLDER.toFile(), finalName);
	
						file.transferTo(uploadedFile);
	
						if (this.isProductionStage()) {
							// ONLY ON PRODUCTION
							try {
								fileOperationsService.productionFileSaver(finalName, "videos", uploadedFile);
							} catch (InterruptedException e) {
								fileOperationsService.deleteLocalFile(uploadedFile.getName(), VIDEOS_FOLDER);
								e.printStackTrace();
							}
							
							comment.setVideourl("https://" + FileOperationsService.bucketAWS + ".s3.amazonaws.com/videos/"
									+ finalName);
							fileOperationsService.deleteLocalFile(uploadedFile.getName(), VIDEOS_FOLDER);
							// ONLY ON PRODUCTION
						} else {
							// ONLY ON DEVELOPMENT
							comment.setVideourl("/assets/videos/" + courseId + "/" + finalName);
							// ONLY ON DEVELOPMENT
						}
						log.info("File succesfully uploaded to path '{}'", uploadedFile.getPath());
					}
	
					commentRepository.save(comment);
					return new ResponseEntity<>(comment, HttpStatus.CREATED);	
				}
			} else {
				log.error("Comment with id '{}' doesn't exist", id_comment);
				return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
			}
		}
	}

	// Method to get the root FileGroup of a FileGroup tree structure, given a FileGroup
	private FileGroup getRootFileGroup(FileGroup fg) {
		while (fg.getFileGroupParent() != null) {
			fg = fg.getFileGroupParent();
		}
		return fg;
	}

	private boolean isProductionStage() {
		return this.profileStage.equals("prod");
	}

}