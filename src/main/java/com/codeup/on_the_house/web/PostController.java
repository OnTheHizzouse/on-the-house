package com.codeup.on_the_house.web;

import com.codeup.on_the_house.data.Post;
import com.codeup.on_the_house.dto.CreatePostDTO;
import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.PostService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping(value = "/api/posts", headers = "Accept=application/json")
public class PostController {

    private final PostService postService;

    public PostController(PostService postService) {
        this.postService = postService;
    }

    //******** GET BY ID *************
    @GetMapping("{id}")
    public Post getById(@PathVariable Long id) {
        System.out.println("Post with an ID of " + id + " has been retrieved");
        return postService.getPostById(id);

    }

    @GetMapping("searchItems/{itemName}")
    public List<Post> getAllPostsWithItemName(@PathVariable String itemName) {
        return postService.getPostsByItemName(itemName);
    }

    @GetMapping
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }

    @GetMapping("searchItemsById/{id}")
    public List<Post> getAllPostsByUserId(@PathVariable Long id) {
        return postService.getPostsByUserId(id);
    }

    @PostMapping("{username}")
    private void addNewPost(@RequestBody CreatePostDTO createPostDTO, @PathVariable String username){
        Post newPost = new Post();
        postService.createPost(createPostDTO, newPost, username);
        System.out.println("New post has been created by user: " + username);
    }

    @PutMapping("{id}")
    public void editPost(@PathVariable Long id, @RequestBody Post editedPost) {
        postService.editPost(id, editedPost);
        System.out.println("Post with ID of " + id + " has been updated successfully");
    }

    @DeleteMapping("{id}")
    public void deletePost(@PathVariable Long id) {
        postService.deletePostById(id);
        System.out.println("Post with an ID of " + id + " has been deleted");
    }

}
