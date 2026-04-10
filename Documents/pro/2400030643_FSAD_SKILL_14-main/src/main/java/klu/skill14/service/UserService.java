package klu.skill14.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import klu.skill14.entity.User;
import klu.skill14.repository.UserRepository;

@Service
public class UserService 
{
    @Autowired
    private UserRepository repository;

    public User registerUser(User user)
    {
        return repository.save(user);
    }

    public User loginUser(String username, String password)
    {
        return repository.findByUsernameAndPassword(username, password);
    }

    public User getProfile(String username)
    {
        return repository.findByUsername(username);
    }
}