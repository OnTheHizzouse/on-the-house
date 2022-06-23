package com.codeup.on_the_house.data;

import com.codeup.on_the_house.service.PostService;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="events")
@DynamicUpdate
public class Event {


//    ********* EVENT PROPERTIES *********
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long postId;
    private LocalDate meetupDate;
    private String meetupTime;
    private String meetupLocation;

    @Enumerated(EnumType.STRING)
    private Status status = Status.OPEN;

    public enum Status {
        OPEN, CLOSED
    }

    @ManyToOne
    @JsonIgnoreProperties({"events", "password"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"events", "posts", "password"})
    private User requester;

//    @ManyToOne
//    @JsonIgnoreProperties({"events"})
//    private Post post;




//    *********** CONSTRUCTOR *************

    public Event(Long id, Long postId, LocalDate meetupDate, String meetupTime, String meetupLocation, Status status) {
        this.id = id;
        this.postId = postId;
        this.meetupDate = meetupDate;
        this.meetupTime = meetupTime;
        this.meetupLocation = meetupLocation;
        this.status = status;
    }



//    CONSTRUCTOR WITH NO ID PROP

    public Event(Long postId, LocalDate meetupDate, String meetupTime, String meetupLocation, Status status) {
        this.postId = postId;
        this.meetupDate = meetupDate;
        this.meetupTime = meetupTime;
        this.meetupLocation = meetupLocation;
        this.status = status;
    }

//    EMPTY CONSTRUCTOR

    public Event() {
    }


//    ********** GETTERS AND SETTERS **********
//    USER AND POST *********

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public Post getPost() {
//        return post;
//    }
//
//    public void setPost(Post post) {
//        this.post = post;
//    }

    public User getRequester() {
        return requester;
    }

    public void setRequester(User requester) {
        this.requester = requester;
    }


//    *******************


    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getMeetupDate() {
        return meetupDate;
    }

    public void setMeetupDate(LocalDate meetupDate) {
        this.meetupDate = meetupDate;
    }

    public String getMeetupTime() {
        return meetupTime;
    }

    public void setMeetupTime(String meetupTime) {
        this.meetupTime = meetupTime;
    }

    public String getMeetupLocation() {
        return meetupLocation;
    }

    public void setMeetupLocation(String meetupLocation) {
        this.meetupLocation = meetupLocation;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }


//    ********** TO STRING ************


    @Override
    public String toString() {
        return "Event{" +
                "id=" + id +
                ", meetupDate=" + meetupDate +
                ", meetupTime='" + meetupTime + '\'' +
                ", meetupLocation='" + meetupLocation + '\'' +
                ", status=" + status +
                '}';
    }
}
