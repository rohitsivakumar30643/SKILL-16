package klu.skill14.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import klu.skill14.entity.User;

public interface UserRepository extends JpaRepository<User, Long>
{
    User findByUsername(String username);
    User findByUsernameAndPassword(String username, String password);
}