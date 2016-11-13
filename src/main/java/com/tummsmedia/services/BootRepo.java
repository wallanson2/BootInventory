package com.tummsmedia.services;

import com.tummsmedia.entities.Boot;
import com.tummsmedia.entities.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by john.tumminelli on 11/11/16.
 */
public interface BootRepo extends CrudRepository<Boot, Integer> {
    Boot findFirstById(int id);
    Boot findByStyle(Boot.Style style);
    List<Boot> findByUser(User user);


}
