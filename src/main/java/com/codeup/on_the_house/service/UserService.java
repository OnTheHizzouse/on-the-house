package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.data.UsersRepository;
import com.codeup.on_the_house.dto.CreateUserDTO;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public void createUser(CreateUserDTO createUserDTO) {
        usersRepository.save(new User(
                createUserDTO.getUsername(),
                createUserDTO.getEmail(),
                createUserDTO.getPassword(),
                createUserDTO.getPhoneNumber(),
                createUserDTO.getAddress()));
    }
}
