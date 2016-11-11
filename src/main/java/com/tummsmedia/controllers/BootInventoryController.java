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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
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

        session.setAttribute("name", user.getUsername());
        String retJson = String.format("{\"id\" : \" %s \" , \"name\" : \"%s\"}", user.getId(), user.getUsername());
        System.out.println(retJson);
        return new ResponseEntity<String>(retJson, HttpStatus.OK);
    }

    @RequestMapping(path = "/all-boots", method = RequestMethod.GET)
    public ResponseEntity<Iterable<Boot>> getAllBoots(HttpSession session, @RequestBody Boot boot) throws Exception {
        String username = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(username);
        if (user == null) {
            return new ResponseEntity<Iterable<Boot>>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Iterable<Boot>>(boots.findAll(), HttpStatus.OK);

    }
    @RequestMapping(path = "/get-boot", method = RequestMethod.GET)
    public ResponseEntity<Boot> getBoot(HttpSession session, @RequestBody Boot boot) throws Exception {
        String name = (String) session.getAttribute("username");
        User user = users.findFirstByUsername(name);
        if (user == null) {
            return new ResponseEntity<Boot>(HttpStatus.FORBIDDEN);
        }
        return new ResponseEntity<Boot>(boots.findOne(boot.getId()), HttpStatus.OK);
    }
}
