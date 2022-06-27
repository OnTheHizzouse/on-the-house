package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.DonorEvent;
import com.codeup.on_the_house.data.RequesterEvent;
import com.codeup.on_the_house.dto.CreateDonorEventDTO;
import com.codeup.on_the_house.dto.CreateRequesterEventDTO;
import com.codeup.on_the_house.service.DonorEventService;
import com.codeup.on_the_house.service.PostService;
import com.codeup.on_the_house.service.RequesterEventService;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.*;

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

    //    ******* CREATE AND EVENT *********
//    EVENT IS CREATED BY REQUESTER, POST ID IS ASSOCIATED WITH POST OWNER BY USERNAME
    @PostMapping("{username}/{requesterName}/{postId}")
    private void addNewEvent(@RequestBody CreateRequesterEventDTO createRequesterEventDTO, @RequestBody CreateDonorEventDTO createDonorEventDTO, @PathVariable String username,
                             @PathVariable String requesterName, @PathVariable Long postId){
        RequesterEvent newRequesterEvent = new RequesterEvent();
        DonorEvent newDonorEvent = new DonorEvent();
        requesterEventService.createEvent(createRequesterEventDTO, newRequesterEvent, createDonorEventDTO, newDonorEvent, username, requesterName, postId);
        System.out.println("New event created by: " + requesterName + " for post with ID of: " + postId + " for user: " + username);
    }


}
