package com.fullteaching.backend.user;

import java.util.Collection;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fullteaching.backend.course.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {

	User findById(long id);

	User findByName(String name);

	Collection<User> findByNameIn(Collection<String> names);

	Collection<User> findAllByName(Collection<String> names);

	Collection<User> findByCourses(Collection<Course> courses);

	Collection<User> findAllById(Set<Long> ids);

}
