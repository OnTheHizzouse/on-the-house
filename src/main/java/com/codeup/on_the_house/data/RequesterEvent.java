package com.codeup.on_the_house.data;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name="requester_events")
@DynamicUpdate
public class RequesterEvent {


    //    ********* EVENT PROPERTIES *********
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Long postId;
    private LocalDate meetupDate;
    private String meetupTime;
    private String meetupLocation;

    @Enumerated(EnumType.STRING)
    private DonorEvent.Status status = DonorEvent.Status.OPEN;




    public enum Status {
        OPEN, CLOSED
    }

    @ManyToOne
    @JsonIgnoreProperties({"requesterEvents", "password", "donorEvent"})
    private User user;

    @ManyToOne
    @JsonIgnoreProperties({"requesterEvents", "posts", "password"})
    private User donor;


    //    *********** CONSTRUCTOR *************


    public RequesterEvent(Long id, Long postId, LocalDate meetupDate, String meetupTime, String meetupLocation, DonorEvent.Status status) {
        this.id = id;
        this.postId = postId;
        this.meetupDate = meetupDate;
        this.meetupTime = meetupTime;
        this.meetupLocation = meetupLocation;
        this.status = status;
    }

    //    CONSTRUCTOR WITH NO ID PROP

    public RequesterEvent(Long postId, LocalDate meetupDate, String meetupTime, String meetupLocation, DonorEvent.Status status) {
        this.postId = postId;
        this.meetupDate = meetupDate;
        this.meetupTime = meetupTime;
        this.meetupLocation = meetupLocation;
        this.status = status;
    }

//    EMPTY CONSTRUCTOR

    public RequesterEvent() {
    }


    //    ********** GETTERS AND SETTERS **********
//    USER AND POST *********

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public User getDonor() {
        return donor;
    }

    public void setDonor(User donor) {
        this.donor = donor;
    }

    public void setRequester(User requester) {
    }

    //    *******************


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getPostId() {
        return postId;
    }

    public void setPostId(Long postId) {
        this.postId = postId;
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

    public DonorEvent.Status getStatus() {
        return status;
    }

    public void setStatus(DonorEvent.Status status) {
        this.status = status;
    }

    //    ********** TO STRING ************

    @Override
    public String toString() {
        return "RequesterEvent{" +
                "id=" + id +
                ", postId=" + postId +
                ", meetupDate=" + meetupDate +
                ", meetupTime='" + meetupTime + '\'' +
                ", meetupLocation='" + meetupLocation + '\'' +
                ", status=" + status +
                '}';
    }
}
