package com.fullteaching.backend.filegroup;

import java.util.ArrayList;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fullteaching.backend.course.Course;
import com.fullteaching.backend.course.CourseRepository;
import com.fullteaching.backend.coursedetails.CourseDetails;
import com.fullteaching.backend.coursedetails.CourseDetailsRepository;
import com.fullteaching.backend.file.File;
import com.fullteaching.backend.file.FileController;
import com.fullteaching.backend.file.FileOperationsService;
import com.fullteaching.backend.file.FileRepository;
import com.fullteaching.backend.security.AuthorizationService;

@RestController
@RequestMapping("/api-files")
public class FileGroupController {
	
	private static final Logger log = LoggerFactory.getLogger(FileGroupController.class);

	@Autowired
	private FileGroupRepository fileGroupRepository;
	
	@Autowired
	private FileRepository fileRepository;
	
	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private CourseDetailsRepository courseDetailsRepository;
	
	@Autowired
	private AuthorizationService authorizationService;
	
	@Autowired
	private FileOperationsService fileOperationsService;
	
	@Value("${profile.stage}")
    private String profileStage;
	
	@RequestMapping(value = "/{id}", method = RequestMethod.POST)
	public ResponseEntity<Object> newFileGroup(@RequestBody FileGroup fileGroup, @PathVariable(value="id") String courseDetailsId) {
		
		log.info("CRUD operation: Adding new file group");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_i = -1;
		try {
			id_i = Long.parseLong(courseDetailsId);
		} catch(NumberFormatException e){
			log.error("CourseDetails ID '{}' is not of type Long", courseDetailsId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		CourseDetails cd = courseDetailsRepository.findOne(id_i);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(cd, cd.getCourse().getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			//fileGroup is a root FileGroup
			if (fileGroup.getFileGroupParent() == null){
				cd.getFiles().add(fileGroup);
				/*Saving the modified courseDetails: Cascade relationship between courseDetails
				  and fileGroups will add the new fileGroup to FileGroupRepository*/
				courseDetailsRepository.save(cd);
				
				log.info("New root file group succesfully added: {}", fileGroup.toString());
				
				/*Entire courseDetails is returned*/
				return new ResponseEntity<>(cd, HttpStatus.CREATED);
			}
			
			//fileGroup is a child of an existing FileGroup
			else{
				FileGroup fParent = fileGroupRepository.findOne(fileGroup.getFileGroupParent().getId());
				if(fParent != null){
					fParent.getFileGroups().add(fileGroup);
					/*Saving the modified parent FileGroup: Cascade relationship between FileGroup and 
					 its FileGroup children will add the new fileGroup to FileGroupRepository*/
					fileGroupRepository.save(fParent);
					CourseDetails cd2 = courseDetailsRepository.findOne(id_i);
					
					log.info("New file sub-group succesfully added: {}", fileGroup.toString());
					
					/*Entire courseDetails is returned*/
					return new ResponseEntity<>(cd2, HttpStatus.CREATED);
				}else{
					return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
				}
			}
		}
	}
	
	
	@RequestMapping(value = "/edit/file-group/course/{courseId}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyFileGroup(@RequestBody FileGroup fileGroup, @PathVariable(value="courseId") String courseId) {
		
		log.info("CRUD operation: Updating filegroup");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_course = -1;
		try{
			id_course = Long.parseLong(courseId);
		}catch(NumberFormatException e){
			log.error("Course ID '{}' is not of type Long", courseId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			FileGroup fg = fileGroupRepository.findOne(fileGroup.getId());
			
			if (fg != null){
				
				log.info("Updating filegroup. Previous value: {}", fg.toString());
				
				fg.setTitle(fileGroup.getTitle());
				fileGroupRepository.save(fg);
				
				log.info("FileGroup succesfully updated. Modified value: {}", fg.toString());
				
				//Returning the root FileGroup of the added file
				return new ResponseEntity<>(this.getRootFileGroup(fg), HttpStatus.OK);
			} else {
				log.error("FileGroup with id '{}' doesn't exist", fileGroup.getId());
				return new ResponseEntity<>(HttpStatus.NOT_FOUND); 
			}
		}
	}
	
	
	@RequestMapping(value = "/delete/file-group/{fileGroupId}/course/{courseId}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteFileGroup(
			@PathVariable(value="fileGroupId") String fileGroupId,
			@PathVariable(value="courseId") String courseId
	) {
		
		log.info("CRUD operation: Deleting filegroup");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_fileGroup = -1;
		long id_course = -1;
		try {
			id_fileGroup = Long.parseLong(fileGroupId);
			id_course = Long.parseLong(courseId);
		} catch(NumberFormatException e){
			log.error("Course ID '{}' or FileGroup ID '{}' are not of type Long", courseId, fileGroupId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		
		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			FileGroup fg = fileGroupRepository.findOne(id_fileGroup);
			
			if (fg != null){
				
				log.info("Deleting filegroup: {}", fg.toString());
				
				if (this.isProductionStage()){
					//Removing all the S3 stored files of the tree structure...
					for (File f : fg.getFiles()){
						fileOperationsService.deleteRemoteFile(f.getNameIdent(), "/files");
					}
					fileOperationsService.recursiveS3StoredFileDeletion(fg.getFileGroups());
				}
				else {
					//Removing all the locally stored files of the tree structure...
					for (File f : fg.getFiles()){
						fileOperationsService.deleteLocalFile(f.getNameIdent(), FileController.FILES_FOLDER);
					}
					fileOperationsService.recursiveLocallyStoredFileDeletion(fg.getFileGroups());
				}
				
				//It is necessary to remove the FileGroup from the CourseDetails that owns it
				CourseDetails cd = c.getCourseDetails();
				cd.getFiles().remove(fg);
				courseDetailsRepository.save(cd);
				fileGroupRepository.delete(fg);
				
				log.info("Filegroup successfully deleted");
				
				return new ResponseEntity<>(fg, HttpStatus.OK);
			}
			else{
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	
	@RequestMapping(value = "/edit/file-order/course/{courseId}/file/{fileId}/from/{sourceID}/to/{targetId}/pos/{position}", method = RequestMethod.PUT)
	public ResponseEntity<Object> editFileOrder(
			@PathVariable(value="courseId") String courseId,
			@PathVariable(value="fileId") String fileId,
			@PathVariable(value="sourceID") String sourceId,
			@PathVariable(value="targetId") String targetId,
			@PathVariable(value="position") String position
		) {
		
		log.info("CRUD operation: Editing file order in filegroup");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_course = -1;
		long id_file = -1;
		long id_source = -1;
		long id_target = -1;
		int pos = 0;
		try{
			id_course = Long.parseLong(courseId);
			id_file = Long.parseLong(fileId);
			id_source = Long.parseLong(sourceId);
			id_target = Long.parseLong(targetId);
			pos = Integer.parseInt(position);
		}catch(NumberFormatException e){
			log.error("Course ID '{}' or File ID '{}' or source ID '{}' or target ID '{}' are not of type Long; or position is not of type Integer",
					courseId, fileId, sourceId, targetId, pos);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			FileGroup sourceFg = fileGroupRepository.findOne(id_source);
			FileGroup targetFg = fileGroupRepository.findOne(id_target);
			File fileMoved = fileRepository.findOne(id_file);
			
			log.info("Moving file {} from filegroup {} to filegroup {} into position {}", fileMoved, sourceFg, targetFg, pos);
			
			sourceFg.getFiles().remove(fileMoved);
			targetFg.getFiles().add(pos, fileMoved);
			
			sourceFg.updateFileIndexOrder();
			targetFg.updateFileIndexOrder();
			
			List<FileGroup> l = new ArrayList<>();
			l.add(sourceFg);
			l.add(targetFg);
			fileGroupRepository.save(l);
			
			log.info("File order succesfully updated");
			
			//Returning the FileGroups of the course
			return new ResponseEntity<>(c.getCourseDetails().getFiles(), HttpStatus.OK);
		}
	}
	
	
	@RequestMapping(value = "/edit/file/file-group/{fileGroupId}/course/{courseId}", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyFile(
			@RequestBody File file,
			@PathVariable(value="fileGroupId") String fileGroupId,
			@PathVariable(value="courseId") String courseId) 
	{
		
		log.info("CRUD operation: Updating file");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_fileGroup = -1;
		long id_course = -1;
		try{
			id_fileGroup = Long.parseLong(fileGroupId);
			id_course = Long.parseLong(courseId);
		}catch(NumberFormatException e){
			log.error("Course ID '{}' or FileGroup ID '{}' are not of type Long", courseId, fileGroupId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			FileGroup fg = fileGroupRepository.findOne(id_fileGroup);
			
			if (fg != null){
				for (int i = 0; i < fg.getFiles().size(); i++){
					if (fg.getFiles().get(i).getId() == file.getId()){
						
						log.info("Updating file. Previous value: {}", fg.getFiles().get(i));
						
						fg.getFiles().get(i).setName(file.getName());
						fileGroupRepository.save(fg);
						
						log.info("File succesfully updated. Modified value: {}", fg.getFiles().get(i));
						
						//Returning the root FileGroup of the added file
						return new ResponseEntity<>(this.getRootFileGroup(fg), HttpStatus.OK);
					}
				}
				
				log.error("File not found");
				return new ResponseEntity<>(HttpStatus.NOT_MODIFIED); 
			} else {
				log.error("FileGroup not found");
				return new ResponseEntity<>(HttpStatus.NOT_MODIFIED); 
			}
		}
	}
	
	
	@RequestMapping(value = "/delete/file/{fileId}/file-group/{fileGroupId}/course/{courseId}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteFile(
			@PathVariable(value="fileId") String fileId,
			@PathVariable(value="fileGroupId") String fileGroupId,
			@PathVariable(value="courseId") String courseId
	) {
		
		log.info("CRUD operation: Deleting file");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_file = -1;
		long id_fileGroup = -1;
		long id_course = -1;
		try {
			id_file = Long.parseLong(fileId);
			id_fileGroup = Long.parseLong(fileGroupId);
			id_course = Long.parseLong(courseId);
		} catch(NumberFormatException e) {
			log.error("Course ID '{}' or FileGroup ID '{}' or File ID '{}' are not of type Long", courseId, fileGroupId, fileId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
		
			FileGroup fg = fileGroupRepository.findOne(id_fileGroup);
			
			if (fg != null){
				File file = null;
				for(File f : fg.getFiles()) {
			        if(f.getId() == id_file) {
			            file = f;
			            break;
			        }
			    }
				if (file != null){
					
					log.info("Deleting file: {}", file.toString());
					
					if (this.isProductionStage()){
						//ONLY ON PRODUCTION
						//Deleting S3 stored file...
						fileOperationsService.deleteRemoteFile(file.getNameIdent(), "/files");
						//ONLY ON PRODUCTION
					} else {
						//ONLY ON DEVELOPMENT
						//Deleting locally stored file...
						fileOperationsService.deleteLocalFile(file.getNameIdent(), FileController.FILES_FOLDER);
						//ONLY ON DEVELOPMENT
					}
					
					fg.getFiles().remove(file);
					fg.updateFileIndexOrder();
					
					fileGroupRepository.save(fg);
					
					log.info("File successfully deleted");
					
					return new ResponseEntity<>(file, HttpStatus.OK);
					
				}else{
					//The file to delete does not exist or does not have a fileGroup parent
					fileRepository.delete(id_file);
					return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
				}
			}else{
				//The fileGroup parent does not exist
				fileRepository.delete(id_file);
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
		}
	}
	
	//Method to get the root FileGroup of a FileGroup tree structure, given a FileGroup
	private FileGroup getRootFileGroup(FileGroup fg) {
		while(fg.getFileGroupParent() != null){
			fg = fg.getFileGroupParent();
		}
		return fg;
	}
	
	private boolean isProductionStage(){
		return this.profileStage.equals("prod");
	}

}