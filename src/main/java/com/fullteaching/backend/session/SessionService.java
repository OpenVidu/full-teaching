package com.fullteaching.backend.session;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SessionService  {

    @Autowired
    private SessionRepository repository;

    public Session getById(long id){
        return repository.findById(id);
    }

    public Session save(Session session){
        return repository.save(session);

    }


    public void delete(Session session){
        repository.delete(session);
    }

}
