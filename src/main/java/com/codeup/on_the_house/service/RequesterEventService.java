package com.codeup.on_the_house.service;


import com.codeup.on_the_house.data.*;
import com.codeup.on_the_house.dto.CreateDonorEventDTO;
import com.codeup.on_the_house.dto.CreateRequesterEventDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RequesterEventService {

    private final RequesterEventsRepository requesterEventsRepository;
    private final DonorEventsRepository donorEventsRepository;
    private final UserService userService;
    private final PostService postService;

    public RequesterEventService(RequesterEventsRepository requesterEventsRepository, DonorEventsRepository donorEventsRepository, UserService userService, PostService postService) {
        this.requesterEventsRepository = requesterEventsRepository;
        this.donorEventsRepository = donorEventsRepository;
        this.userService = userService;
        this.postService = postService;
    }




    //    ******* GET ALL EVENTS *********
    public List<RequesterEvent> getAllRequesterEvents(){
        System.out.println("(Service) All requester events....");
        return requesterEventsRepository.findAll();
    }


    //    ******* USER EVENT ASSOCIATION *******
//    EVENT IS CREATED BY REQUESTER, POST ID IS ASSOCIATED WITH POST OWNER BY USERNAME
    public void createEvent (CreateRequesterEventDTO requesterDto, RequesterEvent newRequesterEvent, CreateDonorEventDTO dto, DonorEvent newDonorEvent, String username, String requesterName, Long postId) {
        User user = userService.getUserByUsername(username);
        User requester = userService.getUserByUsername(requesterName);

        newDonorEvent.setPostId(postId);
        newDonorEvent.setMeetupDate(dto.getMeetupDate());
        newDonorEvent.setMeetupTime(dto.getMeetupTime());
        newDonorEvent.setMeetupLocation(dto.getMeetupLocation());

        newRequesterEvent.setPostId(postId);
        newRequesterEvent.setMeetupDate(dto.getMeetupDate());
        newRequesterEvent.setMeetupTime(dto.getMeetupTime());
        newRequesterEvent.setMeetupLocation(dto.getMeetupLocation());

        requester.getDonorEvents().add(newDonorEvent);
        user.getDonorEvents().add(newDonorEvent);

        requester.getRequesterEvents().add(newRequesterEvent);
        user.getRequesterEvents().add(newRequesterEvent);

        newDonorEvent.setUser(user);
        newDonorEvent.setRequester(requester);

        newRequesterEvent.setUser(user);
        newRequesterEvent.setRequester(requester);

        donorEventsRepository.save(newDonorEvent);
        requesterEventsRepository.save(newRequesterEvent);


    }

}
