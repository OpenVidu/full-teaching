package com.fullteaching.backend.comment;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentService {

    @Autowired
    private CommentRepository repository;

    public Comment save(Comment comment){
        return repository.save(comment);
    }

    public Comment findById(long id){
        return repository.findById(id);
    }

}
