package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.UserService;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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

    @GetMapping("/email/{email}")
     public Optional<User> getByEmail(@PathVariable String email){
        return userService.getUserByEmail(email);
    }

    @GetMapping("me")
    public Optional<User> getCurrentUser(OAuth2Authentication auth){
        System.out.println(auth.toString());
        return userService.getUserByEmail(auth.getName());
    }


    @GetMapping("location/{id}")
    public String getUserLocation(@PathVariable Long id){
        System.out.println("Coordinates for user with an ID of " + id + " retrieved.");
        return userService.getUserId(id).getCoordinates();

    }

    @GetMapping("{id}")
    public User getUserById(@PathVariable Long id){
        System.out.println("User with an ID of " + id + " retrieved.");
        return userService.getUserId(id);
    }

    @PutMapping("{id}")
    public void editUserInfo(@PathVariable Long id, @RequestBody User editedUser) {
        System.out.println("User with an ID of " + id + " has been modified");
        userService.editUser(id, editedUser);
    }
}
