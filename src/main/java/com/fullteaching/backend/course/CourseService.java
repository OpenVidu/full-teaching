package com.fullteaching.backend.course;

import com.fullteaching.backend.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class CourseService {



    @Autowired
    private CourseRepository repository;

    public Course getCourseById(long id){
        return repository.findById(id);
    }


    public Collection<Course> findByAttenders(Collection<User> attenders){
        return repository.findByAttenders(attenders);
    }

    public void save(Course course){
        repository.save(course);
    }

    public void delete(Course course){
        repository.delete(course);
    }

}
