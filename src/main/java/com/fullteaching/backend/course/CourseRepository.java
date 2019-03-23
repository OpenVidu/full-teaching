package com.fullteaching.backend.course;

import java.util.Collection;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullteaching.backend.user.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseRepository extends CrudRepository<Course, Long> {
	
    Collection<Course> findByAttenders(Collection<User> users);

    Course findById(long id);

}
