package com.codeup.on_the_house.web;


import com.codeup.on_the_house.data.Event;
import com.codeup.on_the_house.dto.CreateEventDTO;
import com.codeup.on_the_house.service.EventService;
import com.codeup.on_the_house.service.PostService;
import com.codeup.on_the_house.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/events", headers = "Accept=application/json")
public class EventController {

    private final UserService userService;
    private final PostService postService;
    private final EventService eventService;


    public EventController(UserService userService, PostService postService, EventService eventService) {
        this.userService = userService;
        this.postService = postService;
        this.eventService = eventService;
    }

//    ******** GET ALL EVENTS *******
    @GetMapping
    public List<Event>getAll(){
        System.out.println("All events retrieved.");
        return eventService.getAllEvents();
    }

    @GetMapping("{id}")
    public Event getById(@PathVariable Long id){
        System.out.println("Event with ID of: " + id + " retrieved.");
        return eventService.getEventById(id);
    }

    @PostMapping("{username}/{requesterName}/{postId}")
    private void addNewEvent(@RequestBody CreateEventDTO createEventDTO, @PathVariable String username,
                             @PathVariable String requesterName, @PathVariable Long postId){
        Event newEvent = new Event();
        eventService.createEvent(createEventDTO, newEvent, username, requesterName, postId);
        System.out.println("New event created by: " + requesterName + "for post with ID of: " + postId + "for user: " + username);
    }


}
