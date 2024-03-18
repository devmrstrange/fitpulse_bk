package com.FitPulse.demo.Service;

import com.FitPulse.demo.model.User;
import com.FitPulse.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepo userRepository;

    @Autowired
    public UserServiceImpl(UserRepo userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllPeople() {
        return userRepository.findAll();
    }

    @Override
    public User addPerson(User user) {
        user.setPassword(user.getPassword());
        return userRepository.save(user);
    }

    @Override
    public User updatePerson(long id, User updatedUser) {
        Optional<User> optionalPerson = userRepository.findById(id);
        if (optionalPerson.isPresent()) {
            User existingUser = optionalPerson.get();
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setPassword(updatedUser.getPassword());
            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    @Override
    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // UserService.java
    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }


}
