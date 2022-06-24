package com.codeup.on_the_house.service;


import com.codeup.on_the_house.data.DonorEvent;
import com.codeup.on_the_house.data.DonorEventsRepository;
import com.codeup.on_the_house.data.RequesterEvent;
import com.codeup.on_the_house.data.RequesterEventsRepository;
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

}
