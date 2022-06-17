package com.codeup.on_the_house.data;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);
    User findByEmail(String email);
    User findByCoordinates(String coordinates);
//    Optional<User> findById(Long id);
}
