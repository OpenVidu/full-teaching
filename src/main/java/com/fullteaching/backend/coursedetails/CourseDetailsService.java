package com.fullteaching.backend.coursedetails;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CourseDetailsService {


    @Autowired
    private CourseDetailsRepository repository;



    public CourseDetails findOne(long id){
        return repository.findById(id);
    }


    public CourseDetails save(CourseDetails courseDetails){
        return repository.save(courseDetails);
    }

}
