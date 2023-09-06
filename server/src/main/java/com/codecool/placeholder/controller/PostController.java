package com.codecool.placeholder.controller;

import com.codecool.placeholder.data.User;
import com.codecool.placeholder.data.Post;
import com.codecool.placeholder.repository.UserRepository;
import com.codecool.placeholder.service.PostService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
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
    public List<Post> findAllPost(){return postService.findAllPost();}

    @GetMapping("/{id}")
    public Optional<Post> findPostById(@PathVariable Long id){
        return postService.findPostById(id);
    }

    @PostMapping
    public Optional<Post> savePost(@RequestBody Post post, Authentication authentication){
        User user = userRepository.findByEmail(authentication.getName()).orElseThrow();
        post.setOwner(user);
        post.setUsername(user.getFirstName() + ' ' + user.getLastName());
        return Optional.of(postService.savePost(post)) ;
    }

    @PutMapping
    public Post updatePost(@RequestBody Post post){
        return postService.updatePost(post);
    }

    @DeleteMapping("/{id}")
    public void deletePost(@PathVariable Long id){
        postService.deletePost(id);

    }
    @GetMapping("/answers/{id}")
    public List<Post> findAllAnswersByPostId(@PathVariable Long id){
        Post post = postService.findPostById(id).orElseThrow();
        List<Post> copy = new ArrayList<>(post.getAnswers());
        Collections.reverse(copy);
        return copy;
    }
    @PostMapping("/answers/{id}")
    public Post  saveAnswer(@RequestBody Post answer,@PathVariable Long id,Authentication authentication){

        return  postService.saveAnswer(answer,id,authentication.getName());
    }
}
