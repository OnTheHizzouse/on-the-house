package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.DonorEvent;
import com.codeup.on_the_house.dto.CreateDonorEventDTO;
import com.codeup.on_the_house.service.DonorEventService;
import com.codeup.on_the_house.service.PostService;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/donor/events", headers = "Accept=application/json")
public class DonorEventController {

    private final UserService userService;
    private final PostService postService;
    private final DonorEventService donorEventService;


    public DonorEventController(UserService userService, PostService postService, DonorEventService donorEventService) {
        this.userService = userService;
        this.postService = postService;
        this.donorEventService = donorEventService;
    }

//    ******** GET ALL DONOR EVENTS *******
    @GetMapping
    public List<DonorEvent>getAll(){
        System.out.println("All events retrieved.");
        return donorEventService.getAllEvents();
    }
//    ******* GET EVENT BY ID *********
    @GetMapping("{id}")
    public DonorEvent getById(@PathVariable Long id){
        System.out.println("DonorEvent with ID of: " + id + " retrieved.");
        return donorEventService.getEventById(id);
    }

//    ******* CREATE AND EVENT *********
//    EVENT IS CREATED BY REQUESTER, POST ID IS ASSOCIATED WITH POST OWNER BY USERNAME
//    @PostMapping("{username}/{requesterName}/{postId}")
//    private void addNewEvent(@RequestBody CreateDonorEventDTO createDonorEventDTO, @PathVariable String username,
//                             @PathVariable String requesterName, @PathVariable Long postId){
//        DonorEvent newDonorEvent = new DonorEvent();
//        donorEventService.createEvent(createDonorEventDTO, newDonorEvent, username, requesterName, postId);
//        System.out.println("New event created by: " + requesterName + " for post with ID of: " + postId + " for user: " + username);
//    }


}
