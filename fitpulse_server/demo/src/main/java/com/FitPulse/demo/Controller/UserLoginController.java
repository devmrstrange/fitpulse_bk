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
public class UserLoginController {

    private final UserService userService;

    @Autowired
    public UserLoginController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {
        User existingUser = userService.findByEmail(loginUser.getEmail());
        if (existingUser != null && existingUser.getPassword().equals(loginUser.getPassword())) {
            return "Login successful!";
        } else {
            return "Login failed. Invalid credentials.";
        }
    }
}
