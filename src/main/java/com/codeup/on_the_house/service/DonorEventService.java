package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.DonorEvent;
import com.codeup.on_the_house.data.DonorEventsRepository;
import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreateDonorEventDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DonorEventService {

    private final DonorEventsRepository donorEventsRepository;
    private final UserService userService;
    private final PostService postService;

    public DonorEventService(DonorEventsRepository donorEventsRepository, UserService userService, PostService postService) {
        this.donorEventsRepository = donorEventsRepository;
        this.userService = userService;
        this.postService = postService;
    }

//    ******* USER EVENT ASSOCIATION *******
//    EVENT IS CREATED BY REQUESTER, POST ID IS ASSOCIATED WITH POST OWNER BY USERNAME
//    public void createEvent (CreateDonorEventDTO dto, DonorEvent newDonorEvent, String username, String requesterName, Long postId) {
//        User user = userService.getUserByUsername(username);
//        User requester = userService.getUserByUsername(requesterName);
//
//        newDonorEvent.setPostId(postId);
//        newDonorEvent.setMeetupDate(dto.getMeetupDate());
//        newDonorEvent.setMeetupTime(dto.getMeetupTime());
//        newDonorEvent.setMeetupLocation(dto.getMeetupLocation());
//
//        requester.getEvents().add(newDonorEvent);
//        user.getEvents().add(newDonorEvent);
//
//        newDonorEvent.setUser(user);
//        newDonorEvent.setRequester(requester);
//
//        donorEventsRepository.save(newDonorEvent);
//
//
//    }


//    ******* GET ALL EVENTS *********
    public List<DonorEvent> getAllEvents(){
        System.out.println("(Service) All donor events....");
        return donorEventsRepository.findAll();
    }

//    ******* GET EVENT BY ID *******
    public DonorEvent getEventById(Long id){
        return donorEventsRepository.findById(id).orElseThrow();
    }
}
