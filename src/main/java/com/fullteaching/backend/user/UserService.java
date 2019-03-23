package com.fullteaching.backend.user;

import com.fullteaching.backend.course.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Set;

@Service
public class UserService {


    @Autowired
    private UserRepository repository;




    public void save(User user){
        repository.save(user);
    }

    public User getUserById(long id){
        return repository.findById(id);
    }

    public Collection<User> findByCourses(Collection<Course> courses){
        return repository.findByCourses(courses);
    }

    public void saveAll(Collection<User> users){
        repository.saveAll(users);
    }

    public Collection<User> findAll(Set<Long> set){
        return repository.findAllById(set);
    }

    public User getByName(String name){
        return repository.findByName(name);
    }

    public Collection<User> getAllByNames(Collection<String> names){
        return repository.findByNameIn(names);
    }


}
