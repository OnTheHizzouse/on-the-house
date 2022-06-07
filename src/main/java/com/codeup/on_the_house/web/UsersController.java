package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value="/api/users", headers = "Accept=application/json")
public class UsersController {

    private final UserService userService;

    public UsersController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("createUser")
    private void addNewUser(@RequestBody CreateUserDTO createUserDTO) {
        userService.createUser(createUserDTO);
    }

    @GetMapping
    public List<User> getUserList(){
        return userService.getAllUsers();
    }



}
