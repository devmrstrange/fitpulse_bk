package com.FitPulse.demo.Controller;

import com.FitPulse.demo.model.User;
import com.FitPulse.demo.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/user")
public class UserRegisterController {

    private final UserService userService;

    @Autowired
    public UserRegisterController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getuserslist")
    public ResponseEntity<List<User>> getAllPeople() {
        List<User> people = userService.getAllPeople();
        return new ResponseEntity<>(people, HttpStatus.OK);
    }

    // UserRegisterController.java

    @PostMapping("/register")
    public ResponseEntity<User> addPerson(@RequestBody User user) {
        // Check if the user with the given email already exists
        if (userService.existsByEmail(user.getEmail())) {
            throw new RuntimeException("Email is already exists");
        }
        // If not, proceed with the registration
        User createdUser = userService.addPerson(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<User> updatePerson(@PathVariable("id") long id, @RequestBody User user) {
        User updatedUser = userService.updatePerson(id, user);
        if (updatedUser != null) {
            return new ResponseEntity<>(updatedUser, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
