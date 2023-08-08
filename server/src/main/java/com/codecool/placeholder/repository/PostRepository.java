package com.codecool.placeholder.repository;

import com.codecool.placeholder.data.Post;
import org.springframework.data.jpa.repository.JpaRepository;


public interface PostRepository extends JpaRepository<Post,Long> {
}
