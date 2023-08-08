package com.codecool.placeholder.controller;

import com.codecool.placeholder.data.User;
import com.codecool.placeholder.data.Post;
import com.codecool.placeholder.repository.UserRepository;
import com.codecool.placeholder.service.PostService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/posts")
public class PostController {
private final PostService postService;
private final UserRepository userRepository;

    public PostController(PostService postService,UserRepository userRepository) {
        this.postService = postService;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Post> findAllPost(){return postService.findAllPost();
    }

    @GetMapping("/{id}")
    public Optional<Post> findPostById(@PathVariable Long id){
        return postService.findPostById(id);
    }

    @PostMapping
    public Post savePost(@RequestBody Post post, Authentication authentication){
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow();
        post.setUsername(user.getFirstName() + ' ' + user.getLastName());
        return postService.savePost(post);
    }

    @PutMapping
    public Post updatePost(@RequestBody Post post){
        return postService.updatePost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);

    }



}
