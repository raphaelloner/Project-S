package com.codecool.placeholder.service;

import com.codecool.placeholder.data.Post;
import com.codecool.placeholder.data.User;

import java.util.List;
import java.util.Optional;

public interface PostService {
    List<Post> findAllPost();
    Optional<Post> findPostById(Long id);
    Post savePost(Post post);
    Post updatePost(Post post);
    void deletePost(Long id);

    Post saveAnswer(Post answer, Long id, String email);




}
