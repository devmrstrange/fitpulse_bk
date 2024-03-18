package com.FitPulse.demo.Service;

import com.FitPulse.demo.model.User;

import java.util.List;

public interface UserService {

    List<User> getAllPeople();

    User addPerson(User user);

    User updatePerson(long id, User user);

    User findByEmail(String email);

    boolean existsByEmail(String email);
}
