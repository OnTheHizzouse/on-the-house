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
                createUserDTO.getCoordinates(),
                createUserDTO.getAddress()));
    }

    public List<User> getAllUsers(){
        return usersRepository.findAll();
    }

    //    ******** GET USER BY USERNAME ***********
    public User getUserByUsername(String username) {
        return usersRepository.findByUsername(username);
    }

    //     *******GET USER BY EMAIL************
    public User getUserByEmail(String email) {
        return usersRepository.findByEmail(email);
    }


//    ******** GET USER COORDINATES/LOCATION **********
//    MAYBE USEFUL IN FUTURE...........
    public User getUserCoordinates(String coordinates){
        return usersRepository.findByCoordinates(coordinates);
    }

//    ******* GET USER BY ID ************
    public User getUserId(Long id){
        return usersRepository.findById(id).orElseThrow();
    }

    public void editUser (Long userId, User user) {
        User userToEdit = usersRepository.findById(userId).orElseThrow();

        if(user.getFirstName() != null && !user.getFirstName().isEmpty()){
            userToEdit.setFirstName(user.getFirstName());
        }
        if(user.getLastName() != null && !user.getLastName().isEmpty()) {
            userToEdit.setLastName(user.getLastName());
        }
        if(user.getUsername() != null && !user.getUsername().isEmpty()) {
            userToEdit.setUsername(user.getUsername());
        }
        if(user.getEmail() != null && !user.getEmail().isEmpty()) {
            userToEdit.setEmail(user.getEmail());
        }
        if(user.getPhoneNumber() != null && !user.getPhoneNumber().isEmpty()) {
            userToEdit.setPhoneNumber(user.getPhoneNumber());
        }
        if(user.getAddress() != null && !user.getAddress().isEmpty()) {
            userToEdit.setAddress(user.getAddress());
        }

        userToEdit.setCoordinates(user.getCoordinates());

        usersRepository.save(userToEdit);
    }
}
