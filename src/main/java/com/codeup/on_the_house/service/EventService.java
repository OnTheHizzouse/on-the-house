package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.Event;
import com.codeup.on_the_house.data.EventsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventService {

    private final EventsRepository eventsRepository;
    private final UserService userService;
    private final PostService postService;

    public EventService(EventsRepository eventsRepository, UserService userService, PostService postService) {
        this.eventsRepository = eventsRepository;
        this.userService = userService;
        this.postService = postService;
    }


//    ******* GET ALL EVENTS *********
    public List<Event> getAllEvents(){
        System.out.println("All events....");
        return eventsRepository.findAll();
    }

//    ******* GET EVENT BY ID *******
    public Event getEventById(Long id){
        return eventsRepository.findById(id).orElseThrow();
    }
}
