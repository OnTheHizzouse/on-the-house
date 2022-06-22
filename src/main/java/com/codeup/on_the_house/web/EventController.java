package com.codeup.on_the_house.web;


import com.codeup.on_the_house.service.PostService;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/events", headers = "Accept=application/json")
public class EventController {

    private final UserService userService;
    private final PostService postService;


    public EventController(UserService userService, PostService postService) {
        this.userService = userService;
        this.postService = postService;
    }


}
