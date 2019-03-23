package com.fullteaching.backend.file;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FileService {

    @Autowired
    private FileRepository repository;



    public File save(File file){
        return repository.save(file);
    }

    public File findOne(long id){
        return repository.findById(id);
    }

    public void deleteById(long id){
        repository.deleteById(id);
    }



}
