package com.fullteaching.backend.course;

import java.util.Arrays;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import org.apache.commons.validator.routines.EmailValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fullteaching.backend.user.UserComponent;
import com.fullteaching.backend.user.UserRepository;
import com.fasterxml.jackson.annotation.JsonView;
import com.fullteaching.backend.course.Course.SimpleCourseList;
import com.fullteaching.backend.security.AuthorizationService;
import com.fullteaching.backend.user.User;

@RestController
@RequestMapping("/api-courses")
public class CourseController {
	
	private static final Logger log = LoggerFactory.getLogger(CourseController.class);

	@Autowired
	private CourseRepository courseRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private UserComponent user;
	
	@Autowired
	private AuthorizationService authorizationService;
	
	private class AddAttendersResponse {
		public Collection<User> attendersAdded;
		public Collection<User> attendersAlreadyAdded;
		public Collection<String> emailsInvalid;
		public Collection<String> emailsValidNotRegistered;
	}
	
	@JsonView(SimpleCourseList.class)
	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getCourses(@PathVariable(value="id") String id) {
		
		log.info("CRUD operation: Getting all user courses");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			log.error("User ID '{}' is not of type Long", id);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Set<Long> s = new HashSet<>();
		s.add(id_i);
		Collection<User> users = userRepository.findAll(s);
		Collection<Course> courses = new HashSet<>();
		courses = courseRepository.findByAttenders(users);
		return new ResponseEntity<>(courses, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/course/{id}", method = RequestMethod.GET)
	public ResponseEntity<Object> getCourse(@PathVariable(value="id") String id) {
		
		log.info("CRUD operation: Getting one course");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_i = -1;
		try{
			id_i = Long.parseLong(id);
		}catch(NumberFormatException e){
			log.error("Course ID '{}' is not of type Long", id);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Course course = courseRepository.findOne(id_i);
		return new ResponseEntity<>(course ,HttpStatus.OK);
	}
	
	@RequestMapping(value = "/new", method = RequestMethod.POST)
	public ResponseEntity<Object> newCourse(@RequestBody Course course) {
		
		log.info("CRUD operation: Adding new course");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		User userLogged = user.getLoggedUser();
		
		//Updating course ('teacher', 'attenders')
		course.setTeacher(userLogged);
		course.getAttenders().add(userLogged);
		
		/*Saving the new course: Course entity is the owner of the relationships
		Course-Teacher, Course-User, Course-CourseDetails. Teacher, User and CourseDetails
		tables don't need to be updated (they will automatically be)*/
		courseRepository.save(course);
		courseRepository.flush();
		
		course = courseRepository.findOne(course.getId());
		
		log.info("New course succesfully added: {}", course.toString());
		
		return new ResponseEntity<>(course, HttpStatus.CREATED);
	}
	
	@RequestMapping(value = "/edit", method = RequestMethod.PUT)
	public ResponseEntity<Object> modifyCourse(@RequestBody Course course) {
		
		log.info("CRUD operation: Updating course");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};

		Course c = courseRepository.findOne(course.getId());
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
			log.info("Updating course. Previous value: {}", c.toString());
			
			//Modifying the course attributes
			c.setImage(course.getImage());
			c.setTitle(course.getTitle());
			if (course.getCourseDetails() != null){
				if (course.getCourseDetails().getInfo() != null){
					c.getCourseDetails().setInfo(course.getCourseDetails().getInfo());
				}
			}
			//Saving the modified course
			courseRepository.save(c);
			
			log.info("Course succesfully updated. Modified value: {}", c.toString());
			
			return new ResponseEntity<>(c, HttpStatus.OK);
		}
	}
	
	@RequestMapping(value = "/delete/{courseId}", method = RequestMethod.DELETE)
	public ResponseEntity<Object> deleteCourse(@PathVariable(value="courseId") String courseId) {
		
		log.info("CRUD operation: Deleting course");
		
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
			
			log.info("Deleting course: {}", c.toString());
			
			//Removing the deleted course from its attenders
			Collection<Course> courses = new HashSet<>();
			courses.add(c);
			Collection<User> users = userRepository.findByCourses(courses);
			for(User u: users){
				u.getCourses().remove(c);
			}
			userRepository.save(users);
			c.getAttenders().clear();
			
			courseRepository.delete(c);
			
			log.info("Course successfully deleted");
			
			return new ResponseEntity<>(c, HttpStatus.OK);
		}
	}
	

	
	@RequestMapping(value = "/edit/add-attenders/course/{courseId}", method = RequestMethod.PUT)
	public ResponseEntity<Object> addAttenders(
			@RequestBody String[] attenderEmails, 
			@PathVariable(value="courseId") String courseId) 
	{
		
		log.info("CRUD operation: Adding attenders to course");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};
		
		long id_course = -1;
		try{
			id_course = Long.parseLong(courseId);
		}catch(NumberFormatException e) {
			log.error("Course ID '{}' is not of type Long", courseId);
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Course c = courseRepository.findOne(id_course);
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
			
			log.info("Adding attenders {} to course {}", Arrays.toString(attenderEmails), c.toString());
		
			//Strings with a valid email format
			Set<String> attenderEmailsValid = new HashSet<>();
			//Strings with an invalid email format
			Set<String> attenderEmailsInvalid = new HashSet<>();
			//Strings with a valid email format but no registered in the application
			Set<String> attenderEmailsNotRegistered = new HashSet<>();
			
			EmailValidator emailValidator = EmailValidator.getInstance();
			
			for (int i = 0; i < attenderEmails.length; i++){
				if (emailValidator.isValid(attenderEmails[i])) {
					attenderEmailsValid.add(attenderEmails[i]);
				} else {
					attenderEmailsInvalid.add(attenderEmails[i]);
				}
			}
			
			Collection<User> newPossibleAttenders = userRepository.findByNameIn(attenderEmailsValid);
			Collection<User> newAddedAttenders = new HashSet<>();
			Collection<User> alreadyAddedAttenders = new HashSet<>();
			
			for (String s : attenderEmailsValid){
				if (!this.userListContainsEmail(newPossibleAttenders, s)){
					attenderEmailsNotRegistered.add(s);
				}
			}
			
			for (User attender : newPossibleAttenders){
				boolean newAtt = true;
				if (!attender.getCourses().contains(c)) attender.getCourses().add(c); else newAtt = false;
				if (!c.getAttenders().contains(attender)) c.getAttenders().add(attender); else newAtt = false;
				if (newAtt) newAddedAttenders.add(attender); else alreadyAddedAttenders.add(attender);
			}
			
			//Saving the attenders (all of them, just in case a field of the bidirectional relationship is missing in a Course or a User)
			userRepository.save(newPossibleAttenders);	
			//Saving the modified course
			courseRepository.save(c);
			
			AddAttendersResponse customResponse = new AddAttendersResponse();
			customResponse.attendersAdded = newAddedAttenders;
			customResponse.attendersAlreadyAdded = alreadyAddedAttenders;
			customResponse.emailsInvalid = attenderEmailsInvalid;
			customResponse.emailsValidNotRegistered = attenderEmailsNotRegistered;
			
			log.info("Attenders added: {} | Attenders already exist: {} | Emails not valid: {} | Emails valid but no registered: {}",
					customResponse.attendersAdded,
					customResponse.attendersAlreadyAdded,
					customResponse.emailsInvalid,
					customResponse.emailsValidNotRegistered);
			
			return new ResponseEntity<>(customResponse, HttpStatus.OK);
		}
	}
	
	
	
	@RequestMapping(value = "/edit/delete-attenders", method = RequestMethod.PUT)
	public ResponseEntity<Object> deleteAttenders(@RequestBody Course course) {
		
		log.info("CRUD operation: Deleting attender from course");
		
		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();
		if (authorized != null){
			return authorized;
		};

		Course c = courseRepository.findOne(course.getId());
		
		ResponseEntity<Object> teacherAuthorized = authorizationService.checkAuthorization(c, c.getTeacher());
		if (teacherAuthorized != null) { // If the user is not the teacher of the course
			return teacherAuthorized;
		} else {
			
			log.info("Deleting attender from course {}", c);
		
			Set<Course> setCourse = new HashSet<>();
			setCourse.add(c);
			Collection<User> courseAttenders = userRepository.findByCourses(setCourse);
			
			for (User attender : courseAttenders){
				if (!course.getAttenders().contains(attender)){
					attender.getCourses().remove(c);
					log.info("Attender '{}' succesfully deleted from course", attender.getNickName());
				}
			}
			
			userRepository.save(courseAttenders);
			
			//Modifying the course attenders
			c.setAttenders(course.getAttenders());
			//Saving the modified course
			courseRepository.save(c);
			return new ResponseEntity<>(c.getAttenders(), HttpStatus.OK);
		}
	}
	
	//Checks if a User collection contains a user with certain email
	private boolean userListContainsEmail(Collection<User> users, String email){
		boolean isContained = false;
		for (User u : users){
			if (u.getName().equals(email)) {
				isContained = true;
				break;
			}
		}
		return isContained;
	}
	
}

	
	
