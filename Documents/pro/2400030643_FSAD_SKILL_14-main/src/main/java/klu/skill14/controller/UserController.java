package klu.skill14.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import klu.skill14.entity.User;
import klu.skill14.service.UserService;
@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController 
{
    @Autowired
    private UserService service;
    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody User user)
    {
        User savedUser = service.registerUser(user);
        return ResponseEntity.ok(savedUser);
    }
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user)
    {
        User existingUser = service.loginUser(user.getUsername(), user.getPassword());

        if (existingUser != null)
        {
            return ResponseEntity.ok(existingUser);
        }
        else
        {
            return ResponseEntity.badRequest().body("Invalid username or password");
        }
    }
    @GetMapping("/profile/{username}")
    public ResponseEntity<?> getProfile(@PathVariable String username)
    {
        User user = service.getProfile(username);
        if (user != null)
        {
            return ResponseEntity.ok(user);
        }
        else
        {
            return ResponseEntity.badRequest().body("User not found");
        }
    }
}