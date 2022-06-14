package com.codeup.on_the_house.service;

import com.codeup.on_the_house.data.Post;
import com.codeup.on_the_house.data.PostsRepository;
import com.codeup.on_the_house.data.User;
import com.codeup.on_the_house.dto.CreatePostDTO;
import com.sun.xml.bind.v2.TODO;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {
    private final PostsRepository postsRepository;
    private final UserService userService;

    public PostService(PostsRepository postsRepository, UserService userService) {
        this.postsRepository = postsRepository;
        this.userService = userService;
    }

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

    public void editPost(Long postId, Post post) {
        Post postToEdit = postsRepository.findById(postId).orElseThrow();

        //TODO - Will probably require refactoring after implementing photo service
        if (post.getDescription() != null && !post.getDescription().isEmpty()) {
            postToEdit.setDescription(post.getDescription());
        }
        if (post.getItemName() != null && !post.getItemName().isEmpty()) {
            postToEdit.setItemName(post.getItemName());
        }
        if (post.getQuantity() >= 1) {
            postToEdit.setQuantity(post.getQuantity());
        }
        if (post.getExpiryDate() != null) {
            postToEdit.setExpiryDate(post.getExpiryDate());
        }
        if(post.getItemPhoto() != null && !post.getItemPhoto().isEmpty()) {
            postToEdit.setItemPhoto(post.getItemPhoto());
        }

        postsRepository.save(postToEdit);
    }

    public void deletePostById(Long id) {
        postsRepository.deleteById(id);
    }

    public List<Post> getAllPost(){
        return postsRepository.findAll();
    }
}

