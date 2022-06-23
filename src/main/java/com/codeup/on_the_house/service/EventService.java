package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.Event;
import com.codeup.on_the_house.data.EventsRepository;
import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreateEventDTO;
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

//    ******* USER EVENT ASSOCIATION *******
    public void createEvent (CreateEventDTO dto, Event newEvent, String username, String requesterName, Long postId) {
        User user = userService.getUserByUsername(username);
        User requester = userService.getUserByUsername(requesterName);

        newEvent.setPostId(postId);
        newEvent.setMeetupDate(dto.getMeetupDate());
        newEvent.setMeetupTime(dto.getMeetupTime());
        newEvent.setMeetupLocation(dto.getMeetupLocation());

        user.getEvents().add(newEvent);
        requester.getEvents().add(newEvent);

        newEvent.setUser(user);
        newEvent.setRequester(requester);

        eventsRepository.save(newEvent);


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
