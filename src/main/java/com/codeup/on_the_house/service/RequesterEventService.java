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
//    WILL POPULATE DONOR TABLE
    public void createDonorEvent (CreateDonorEventDTO dto, DonorEvent newDonorEvent, String username, String requesterName, Long postId) {
        User user = userService.getUserByUsername(username);
        User requester = userService.getUserByUsername(requesterName);

        newDonorEvent.setPostId(postId);
        newDonorEvent.setMeetupDate(dto.getMeetupDate());
        newDonorEvent.setMeetupTime(dto.getMeetupTime());
        newDonorEvent.setMeetupLocation(dto.getMeetupLocation());

        requester.getDonorEvents().add(newDonorEvent);
        user.getDonorEvents().add(newDonorEvent);

        newDonorEvent.setUser(user);
        newDonorEvent.setRequester(requester);

        donorEventsRepository.save(newDonorEvent);

    }

    //    WILL POPULATE REQUESTER TABLE

    public void createRequesterEvent (CreateRequesterEventDTO requesterDto, RequesterEvent newRequesterEvent, String username, String donorName, Long postId) {
        User user = userService.getUserByUsername(username);
        User donor = userService.getUserByUsername(donorName);

        newRequesterEvent.setPostId(postId);
        newRequesterEvent.setMeetupDate(requesterDto.getMeetupDate());
        newRequesterEvent.setMeetupTime(requesterDto.getMeetupTime());
        newRequesterEvent.setMeetupLocation(requesterDto.getMeetupLocation());

        donor.getRequesterEvents().add(newRequesterEvent);
        user.getRequesterEvents().add(newRequesterEvent);

        newRequesterEvent.setUser(user);
        newRequesterEvent.setDonor(donor);

        requesterEventsRepository.save(newRequesterEvent);

    }
}
