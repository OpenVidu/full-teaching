package com.fullteaching.backend.entry;

import com.fullteaching.backend.comment.CommentService;
import com.fullteaching.backend.coursedetails.CourseDetailsService;
import com.fullteaching.backend.forum.ForumService;
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

import com.fullteaching.backend.forum.Forum;
import com.fullteaching.backend.security.AuthorizationService;
import com.fullteaching.backend.comment.Comment;
import com.fullteaching.backend.coursedetails.CourseDetails;
import com.fullteaching.backend.user.User;
import com.fullteaching.backend.user.UserComponent;

@RestController
@RequestMapping("/api-entries")
public class EntryController {
	
	private static final Logger log = LoggerFactory.getLogger(EntryController.class);
	
	@Autowired
	private ForumService forumService;
	
	@Autowired
	private EntryService entryService;
	
	@Autowired
	private CommentService commentService;
	
	@Autowired
	private CourseDetailsService courseDetailsService;
	
	@Autowired
	private UserComponent user;
	
	@Autowired
	private AuthorizationService authorizationService;
	
	@RequestMapping(value = "/forum/{id}", method = RequestMethod.POST)
	public ResponseEntity<Object> newEntry(@RequestBody Entry entry, @PathVariable(value="id") String courseDetailsId) {
		
		log.info("CRUD operation: Adding new entry");
		
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
		
		CourseDetails cd = courseDetailsService.findOne(id_i);
		
		ResponseEntity<Object> userAuthorized = authorizationService.checkAuthorizationUsers(cd, cd.getCourse().getAttenders());
		if (userAuthorized != null) { // If the user is not an attender of the course
			return userAuthorized;
		} else {
		
			Forum forum = cd.getForum();
			
			//Setting the author of the entry
			User userLogged = user.getLoggedUser();
			entry.setUser(userLogged);
			
			//Setting the author and date of its first comment
			Comment comment = entry.getComments().get(0);
			comment.setUser(userLogged);
			comment.setDate(System.currentTimeMillis());
			
			//Setting the date of the entry
			entry.setDate(System.currentTimeMillis());
			
			comment = commentService.save(comment);
			entry = entryService.save(entry);
			
			forum.getEntries().add(entry);
			forumService.save(forum);
			
			log.info("New entry succesfully added: {}", entry.toString());
			
			/*Entire forum is returned in order to have the new entry ID available just
			in case the author wants to add to it a new comment without refreshing the page*/
			return new ResponseEntity<>(new NewEntryCommentResponse(entry, comment), HttpStatus.CREATED);
		}
	}

}
