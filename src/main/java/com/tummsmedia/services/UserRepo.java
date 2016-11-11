package com.tummsmedia.services;

import com.tummsmedia.entities.User;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by john.tumminelli on 11/11/16.
 */
public interface UserRepo extends CrudRepository<User, Integer> {
    User findFirstByName(String username);

}
