package com.fullteaching.backend.file;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface FileRepository extends CrudRepository<File, Long> {


    File findById(long id);



}
