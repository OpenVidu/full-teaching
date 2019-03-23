package com.fullteaching.backend.file;

import java.io.File;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fullteaching.backend.course.Course;
import com.fullteaching.backend.course.CourseRepository;
import com.fullteaching.backend.security.AuthorizationService;

@RestController
@RequestMapping("/assets/videos/{courseId}")
public class VideosHttpHandler {

	private static final Logger log = LoggerFactory.getLogger(VideosHttpHandler.class);

	@Autowired
	private AuthorizationService authorizationService;

	@Autowired
	private CourseRepository courseRepository;

	@RequestMapping(value = "{filename:.+}", method = RequestMethod.GET)
	public ResponseEntity<Object> getEpisodeFile(@PathVariable String courseId, @PathVariable String filename,
			HttpServletRequest request, HttpServletResponse response) throws Exception {

		ResponseEntity<Object> authorized = authorizationService.checkBackendLogged();

		if (authorized != null) {
			return authorized;
		} else {
			long id_course = -1;
			try {
				id_course = Long.parseLong(courseId);
			} catch (NumberFormatException e) {
				log.error("Course ID '{}' is not of type Long", courseId);
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}

			Course c = courseRepository.findById(id_course);

			ResponseEntity<Object> userAuthorized = authorizationService.checkAuthorizationUsers(c, c.getAttenders());
			if (userAuthorized != null) { // If the user is not an attender of the course
				return userAuthorized;
			} else {

				MultipartFileSender.fromPath(new File(FileController.VIDEOS_FOLDER.toFile(), filename).toPath())
						.with(request).with(response).serveResource();
			}
		}
		return new ResponseEntity<>(HttpStatus.OK);
	}
}
