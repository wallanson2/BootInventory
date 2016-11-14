package com.tummsmedia.controllers;

import com.tummsmedia.entities.Boot;
import com.tummsmedia.entities.BootWrapper;
import com.tummsmedia.entities.User;
import com.tummsmedia.services.BootRepo;
import com.tummsmedia.services.UserRepo;
import org.h2.tools.Server;
import org.springframework.beans.factory.annotation.Autowired;
import jodd.json.JsonParser;
import jodd.json.JsonSerializer;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

/**
 * Created by john.tumminelli on 11/11/16.
 */
@RestController
public class BootInventoryController {
    @Autowired
    UserRepo users;

    @Autowired
    BootRepo boots;

    Server h2;

    @PostConstruct
    public void init() throws SQLException, com.tummsmedia.utilities.PasswordStorage.CannotPerformOperationException, IOException {
        h2 = Server.createWebServer().start();

        if (boots.count() == 0) {
            loadDummyData();
        }
    }
    @PreDestroy
    public void destroy() {
        h2.stop();
    }

    public void loadDummyData() throws IOException {

        File f = new File("dummy_data_json");
        FileReader fr = new FileReader(f);
        int fileSize = (int) f.length();     //cast to int
        char[] contents = new char[fileSize];
        fr.read(contents, 0, fileSize);
        JsonParser parser = new JsonParser();

//        Thanks to Zach, this brings all in at once in aggregate - extended save method within Crud Repository Interface
        BootWrapper bootWrapper = parser.parse(contents, BootWrapper.class);
        boots.save(bootWrapper.boots);
    }

    @RequestMapping(path = "/user", method = RequestMethod.GET)
    public User getUser(HttpSession session) {
        String username = (String) session.getAttribute("username");
        return users.findFirstByUsername(username);
    }

    @RequestMapping(path = "/user", method = RequestMethod.POST)
    public ResponseEntity postUser(HttpSession session, @RequestBody User user) throws com.tummsmedia.utilities.PasswordStorage.InvalidHashException, com.tummsmedia.utilities.PasswordStorage.CannotPerformOperationException {
        User userFromDb = users.findFirstByUsername(user.getUsername());
        if (userFromDb == null) {
            user.setUsername(user.getUsername());
            user.setPassword(com.tummsmedia.utilities.PasswordStorage.createHash(user.getPassword()));
            users.save(user);
        }
        else if (!com.tummsmedia.utilities.PasswordStorage.verifyPassword(user.getPassword(), userFromDb.getPassword())) {
            return new ResponseEntity<String>(HttpStatus.FORBIDDEN);
        }

        session.setAttribute("username", user.getUsername());
        String retJson = String.format("{\"id\" : \" %s \" , \"name\" : \"%s\"}", user.getId(), user.getUsername());
        return new ResponseEntity<String>(retJson, HttpStatus.OK);
    }

    @RequestMapping(path = "/all-boots", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Boot>> getAllBoots(HttpSession session) throws Exception {
        String username = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(username);
        if (user == null) {
            return new ResponseEntity<Iterable<Boot>>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Iterable<Boot>>(boots.findAll(), HttpStatus.OK);

    }
    @RequestMapping(path = "/get-boot/{id}", method = RequestMethod.GET)
    public ResponseEntity<Boot> getBoot(@PathVariable("id")int id, HttpSession session) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        Boot boot = boots.findFirstById(Integer.valueOf(id));
        if (user == null) {
            return new ResponseEntity<Boot>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Boot>(boot, HttpStatus.OK);
    }
    @RequestMapping(path = "/add-boot", method = RequestMethod.POST)
    public ResponseEntity addBoot(HttpSession session, @RequestBody Boot boot) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        Boot b = new Boot(boot.getBootName(), boot.getDescription(), boot.getStyle(), boot.getPrice(), user, boot.getImage(), boot.getQuantity());
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        boots.save(b);
        return new ResponseEntity(HttpStatus.OK);
    }
    @RequestMapping(path = "/edit-boot", method = RequestMethod.POST)
    public ResponseEntity editBoot(HttpSession session, @RequestBody Boot boot) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        if (user == null) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        Boot b = new Boot(boot.getBootName(), boot.getDescription(), boot.getStyle(), boot.getPrice(), user, boot.getImage(), boot.getQuantity());
        boots.save(b);
        return new ResponseEntity<Boot>(boot, HttpStatus.OK);
    }
    @RequestMapping(method = RequestMethod.GET, path = "/{username}/list-by-user.json")
    public ResponseEntity<Iterable<Boot>> listByUser(HttpSession session, @PathVariable("username") String targetUser){
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        if (user == null) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        User u = users.findFirstByUsername(targetUser);
        return new ResponseEntity<Iterable<Boot>> (boots.findByUser(u), HttpStatus.OK);
    }
    @RequestMapping(method = RequestMethod.DELETE, path = "/delete-boot/{id}")
    public ResponseEntity<Boot> deleteBoot(@PathVariable("id")int id, HttpSession session) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        if (user == null) {
            return new ResponseEntity(HttpStatus.FORBIDDEN);
        }
        boots.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);

    }

}
