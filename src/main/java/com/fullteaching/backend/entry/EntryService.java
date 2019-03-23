package com.fullteaching.backend.entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EntryService {

    @Autowired
    private EntryRepository repository;



    public Entry save(Entry entry){
        return repository.save(entry);
    }


    public Entry findOne(long id){
        return repository.findById(id);
    }

}
