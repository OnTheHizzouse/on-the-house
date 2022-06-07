package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.Post;
import com.codeup.on_the_house.data.PostsRepository;
import com.codeup.on_the_house.dto.CreatePostDTO;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private final PostsRepository postsRepository;

    public PostService(PostsRepository postsRepository) {
        this.postsRepository = postsRepository;
    }

    public void createPost(CreatePostDTO createPostDTO){
        postsRepository.save(new Post(
                createPostDTO.getItemName(),
                createPostDTO.getDescription(),
                createPostDTO.getItemPhoto(),
                createPostDTO.getExpiryDate(),
                createPostDTO.getQuantity()
        ));
    }
}
