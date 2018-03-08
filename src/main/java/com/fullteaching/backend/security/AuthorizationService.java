package com.fullteaching.backend.security;

import java.util.Collection;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.fullteaching.backend.user.User;
import com.fullteaching.backend.user.UserComponent;

public class AuthorizationService {
	
	private static final Logger log = LoggerFactory.getLogger(AuthorizationService.class);
	
	@Autowired
	private UserComponent user;
	
	// Checks if user logged
	public ResponseEntity<Object> checkBackendLogged(){
		if (!user.isLoggedUser()) {
			log.error("Not user logged");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}
		return null; 
	}
	
	// Checks authorization of teacher
	public ResponseEntity<Object> checkAuthorization(Object o, User u){
		if(o == null){
			// The object does not exist
			log.error("Element not found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(!this.user.getLoggedUser().equals(u)){
			// The user does not match the logged one
			log.warn("The user is not authorized");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); 
		}
		return null;
	}
	
	// 	Checks authorization of participant
	public ResponseEntity<Object> checkAuthorizationUsers(Object o, Collection<User> users){
		if(o == null){
			//The object does not exist
			log.error("Element not found");
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		if(!users.contains(this.user.getLoggedUser())){
			//The user is not authorized to edit if it is not an attender of the Course
			log.error("User not authorized. Must be a participant of the course");
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED); 
		}
		return null;
	}

}
