package com.codeup.on_the_house.web;

import com.codeup.on_the_house.dto.CreatePostDTO;
import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.PostService;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    @PostMapping("createPost")
    private void addNewPost(@RequestBody CreatePostDTO createPostDTO){
        postService.createPost(createPostDTO);
    }
}
