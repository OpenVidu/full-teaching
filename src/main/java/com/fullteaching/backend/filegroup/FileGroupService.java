package com.fullteaching.backend.filegroup;

import com.fullteaching.backend.file.File;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collection;

@Service
public class FileGroupService  {

    @Autowired
    private FileGroupRepository repository;


    public FileGroup findOne(long id){
        return repository.findById(id);
    }

    public FileGroup save(FileGroup fileGroup){
        return repository.save(fileGroup);
    }

    public void delete(FileGroup fileGroup){
        repository.delete(fileGroup);
    }

    public void saveAll(Collection<FileGroup> collection){
        repository.saveAll(collection);
    }

}
