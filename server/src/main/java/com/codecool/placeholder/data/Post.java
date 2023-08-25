package com.codecool.placeholder.data;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="posts")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;
    @ManyToOne
    @JoinColumn(name = "parent_post_id")
    private Post parentPost;

    @Column(name = "user_name")
    private String username;
    @Column(name="post_time")
    private LocalDateTime postTime;
    @Column(name="last_update")
    private LocalDateTime lastUpdated;
    @Column(name = "content")
    private String content;
    @OneToMany(mappedBy = "parentPost", cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    private List<Post> answers;

    public Post(Long id, Post parentPost, String username, LocalDateTime postTime, LocalDateTime lastUpdated, String content, List<Post> answers) {
        this.id = id;
        this.parentPost = parentPost;
        this.username = username;
        this.postTime = postTime;
        this.lastUpdated = lastUpdated;
        this.content = content;
        this.answers = answers;
    }

    public Post() {
     this.postTime = LocalDateTime.now();
     this.lastUpdated = LocalDateTime.now();
    }
    public List<Post> getAnswers() {return answers;}

    public void setAnswers(List<Post> answers) {this.answers = answers;}
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Post getParentPost() {
        return parentPost;
    }

    public void setParentPost(Post parentPost) {
        this.parentPost = parentPost;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public LocalDateTime getPostTime() {
        return postTime;
    }

    public void setPostTime(LocalDateTime postTime) {
        this.postTime = postTime;
    }

    public LocalDateTime getLastUpdated() {
        return lastUpdated;
    }

    public void setLastUpdated(LocalDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
