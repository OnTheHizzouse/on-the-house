package com.codeup.on_the_house.web;

import com.codeup.on_the_house.data.Post;
import com.codeup.on_the_house.dto.CreatePostDTO;
import com.codeup.on_the_house.dto.CreateUserDTO;
import com.codeup.on_the_house.service.PostService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
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
    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("{id}")
    public Post getById(@PathVariable Long id) {
        System.out.println("Post with an ID of " + id + " has been retrieved");
        return postService.getPostById(id);

    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @GetMapping("searchItems/{itemName}")
    public List<Post> getAllPostsWithItemName(@PathVariable String itemName) {
        return postService.getPostsByItemName(itemName);
    }


    @GetMapping
    public List<Post> getAllPost(){
        return postService.getAllPost();
    }



    @GetMapping("searchItemsByUserId/{id}")
    public List<Post> getAllPostsByUserId(@PathVariable Long id) {
        return postService.getPostsByUserId(id);
    }

//    @GetMapping("searchItemsByUserId/{id}")
//    public List<Post> getAllPostsByUserId(OAuth2Authentication auth) {
//        System.out.println(auth.toString());
//        return postService.getPostsByUserId(auth.);
//    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PostMapping("{username}")
    public void addNewPost(@RequestBody CreatePostDTO createPostDTO, @PathVariable String username){
        Post newPost = new Post();
        postService.createPost(createPostDTO, newPost, username);
        System.out.println("New post has been created by user: " + username);
    }

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
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

    @PreAuthorize("hasAnyAuthority('ADMIN', 'USER')")
    @PutMapping("changeStatus/close/{id}")
    public void changePostStatusToClosed(@PathVariable long id) {
        postService.changePostStatusToClosed(id);
        System.out.println("Post Status Has Been Changed");
    }

}
