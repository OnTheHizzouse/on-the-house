package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.EventsRepository;
import org.springframework.stereotype.Service;

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
}
