package com.codeup.on_the_house.dto;

import java.time.LocalDate;

public class CreateRequesterEventDTO {


    //    ******* PROPERTIES ******
    private LocalDate meetupDate;
    private String meetupTime;
    private String meetupLocation;


//    ******** CONSTRUCTOR *********


    public CreateRequesterEventDTO(LocalDate meetupDate, String meetupTime, String meetupLocation) {
        this.meetupDate = meetupDate;
        this.meetupTime = meetupTime;
        this.meetupLocation = meetupLocation;
    }

    //    ******* GETTERS AND SETTERS ********

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
}
