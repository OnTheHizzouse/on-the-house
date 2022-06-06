package com.codeup.on_the_house.web;


import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.*;

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



}
