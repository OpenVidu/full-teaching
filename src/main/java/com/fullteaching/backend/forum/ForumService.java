package com.fullteaching.backend.forum;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ForumService {

    @Autowired
    private ForumRepository repository;



    public Forum save(Forum forum){
        return repository.save(forum);
    }




}
