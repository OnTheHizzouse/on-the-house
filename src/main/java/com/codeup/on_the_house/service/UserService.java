package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.data.UsersRepository;
import com.codeup.on_the_house.dto.CreateUserDTO;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UsersRepository usersRepository;

    public UserService(UsersRepository usersRepository) {
        this.usersRepository = usersRepository;
    }

    public void createUser(CreateUserDTO createUserDTO) {
        usersRepository.save(new User(
                createUserDTO.getFirstName(),
                createUserDTO.getLastName(),
                createUserDTO.getUsername(),
                createUserDTO.getEmail(),
                createUserDTO.getPassword(),
                createUserDTO.getPhoneNumber(),
                createUserDTO.getCoordinates()));
    }

    public List<User> getAllUsers(){
        return usersRepository.findAll();
    }

    //    ******** GET USER BY USERNAME ***********
    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    //     *******GET USER BY EMAIL************
    public Optional<User> getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }


//    ******** GET USER COORDINATES/LOCATION **********
//    MAYBE USEFUL IN FUTURE.......
    public User getUserCoordinates(String coordinates){
        return usersRepository.findByCoordinates(coordinates);
    }

//    ******* GET USER BY ID ************
    public User getUserId(Long id){
        return usersRepository.findById(id).orElseThrow();
    }

}
