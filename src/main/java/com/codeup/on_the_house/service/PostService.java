package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.Post;
import com.codeup.on_the_house.data.PostsRepository;
import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreatePostDTO;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostsRepository postsRepository;
    private final UserService userService;

    public PostService(PostsRepository postsRepository, UserService userService) {
        this.postsRepository = postsRepository;
        this.userService = userService;
    }

//    public void createPost(CreatePostDTO createPostDTO){
//        postsRepository.save(new Post(
//                createPostDTO.getItemName(),
//                createPostDTO.getDescription(),
//                createPostDTO.getItemPhoto(),
//                createPostDTO.getExpiryDate(),
//                createPostDTO.getQuantity()
//        ));
//    }

    public void createPost (CreatePostDTO dto, Post newPost, String username){
        User user = userService.getUserByUsername(username);
        newPost.setItemName(dto.getItemName());
        newPost.setDescription(dto.getDescription());
        newPost.setItemPhoto(dto.getItemPhoto());
        newPost.setExpiryDate(dto.getExpiryDate());
        newPost.setQuantity(dto.getQuantity());

        user.getPosts().add(newPost);

        newPost.setUser(user);

        postsRepository.save(newPost);
    }
}
