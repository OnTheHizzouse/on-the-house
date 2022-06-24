package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.RequesterEvent;
import com.codeup.on_the_house.service.DonorEventService;
import com.codeup.on_the_house.service.PostService;
import com.codeup.on_the_house.service.RequesterEventService;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/requester/events", headers = "Accept=application/json")
public class RequesterEventController {

    private final RequesterEventService requesterEventService;
    private final UserService userService;
    private final PostService postService;
    private final DonorEventService donorEventService;


    public RequesterEventController(RequesterEventService requesterEventService, UserService userService, PostService postService, DonorEventService donorEventService) {
        this.requesterEventService = requesterEventService;
        this.userService = userService;
        this.postService = postService;
        this.donorEventService = donorEventService;
    }

    //    ******** GET ALL REQUESTER EVENTS *******

    @GetMapping
    public List<RequesterEvent>getAll(){
        System.out.println("All requester events retrieved");
        return requesterEventService.getAllRequesterEvents();
    }

}
