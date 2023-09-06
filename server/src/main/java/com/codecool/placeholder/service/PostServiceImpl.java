package com.codecool.placeholder.service;

import com.codecool.placeholder.data.Post;
import com.codecool.placeholder.data.User;
import com.codecool.placeholder.repository.PostRepository;
import com.codecool.placeholder.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService{

    private final PostRepository postRepository;
    private final UserRepository userRepository;

    public PostServiceImpl(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }

    @Override
    public List<Post> findAllPost() {
        List<Post> copy = new ArrayList<>(postRepository.findAll().stream().filter((post)-> post.getParentPost() == null).collect(Collectors.toList()));
        Collections.reverse(copy);
        return copy;
    }

    @Override
    public Optional<Post> findPostById(Long id) {
      return postRepository.findById(id);
    }

    @Override
    public Post savePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public Post updatePost(Post post) {
        return postRepository.save(post);
    }

    @Override
    public void deletePost(Long id) {
     postRepository.deleteById(id);
    }

    @Override
    public Post saveAnswer(Post answer, Long id, String email) {
         Post post = postRepository.findById(id).orElseThrow();
         User user = userRepository.findByEmail(email).orElseThrow();
         answer.setOwner(user);
         answer.setParentPost(post);
         answer.setUsername(user.getFirstName() + " " + user.getLastName());
         post.addAnswers(answer);
             return postRepository.save(answer);
    }


}
