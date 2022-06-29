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
    @PostMapping("createDonorEvent/{requesterName}/{username}/{postId}")
    private void addNewDonorEvent(@RequestBody CreateDonorEventDTO createDonorEventDTO, @PathVariable String username,
                             @PathVariable String requesterName, @PathVariable Long postId){
        DonorEvent newDonorEvent = new DonorEvent();
        requesterEventService.createDonorEvent(createDonorEventDTO, newDonorEvent, username, requesterName, postId);
        System.out.println("New event created by: " + requesterName + " for post with ID of: " + postId + " for user: " + username + "to populate Donor table");
    }

    @PostMapping("createRequesterEvent/{username}/{donorName}/{postId}")
    private void addNewRequestEvent(@RequestBody CreateRequesterEventDTO createRequesterEventDTO, @PathVariable String username,
                             @PathVariable String donorName, @PathVariable Long postId){
        RequesterEvent newRequesterEvent = new RequesterEvent();
        requesterEventService.createRequesterEvent(createRequesterEventDTO, newRequesterEvent, username, donorName, postId);
        System.out.println("New event created by: " + donorName + " for post with ID of: " + postId + " for user: " + username + "to populate Requester table");
    }

    @PutMapping("changeStatus/open/{id}")
    private void changeStatusToOpen(@PathVariable long id){
        requesterEventService.changeStatusToOpen(id);
        System.out.println("Status has been changed");
    }

    @PutMapping("changeStatus/close/{id}")
    private void changeStatusToClosed(@PathVariable long id){
        requesterEventService.changeStatusToClosed(id);
        System.out.println("Status has been changed");
    }
}
