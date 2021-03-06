package com.codeup.on_the_house.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Date;
import java.time.LocalDate;

@Entity
@Table(name="posts")
@DynamicUpdate
public class Post {

//    ******* properties ******
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String itemName;
    private String description;
    private String itemPhoto;

    @Enumerated(EnumType.STRING)
    private Status status = Status.OPEN;

    public enum Status {
        OPEN, CLOSED
    }


    private LocalDate expiryDate;
    private int quantity;

//    ***** USER OBJECT *******
    @ManyToOne
    @JsonIgnoreProperties({"posts", "password"})
    private User user;

//    ***** EVENT OBJECT *******
//    @OneToOne
//    @JsonIgnoreProperties({"posts"})
//    private DonorEvent event;

//    ***** constructor *******


    public Post(Long id, String itemName, String description, String itemPhoto, LocalDate expiryDate, int quantity) {
        this.id = id;
        this.itemName = itemName;
        this.description = description;
        this.itemPhoto = itemPhoto;
        this.expiryDate = expiryDate;
        this.quantity = quantity;
    }

    public Post(String itemName, String description, String itemPhoto, LocalDate expiryDate, int quantity) {
        this.itemName = itemName;
        this.description = description;
        this.itemPhoto = itemPhoto;
        this.expiryDate = expiryDate;
        this.quantity = quantity;
    }

    public Post() {
    }

//    ******** getters and setters *******
//    ******* User and DonorEvent*********


    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

//    public DonorEvent getEvent() {
//        return event;
//    }
//
//    public void setEvent(DonorEvent event) {
//        this.event = event;
//    }

    //    ***********************

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getItemPhoto() {
        return itemPhoto;
    }

    public void setItemPhoto(String itemPhoto) {
        this.itemPhoto = itemPhoto;
    }

    public LocalDate getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(LocalDate expiryDate) {
        this.expiryDate = expiryDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }


    //    **** to String *******
    @Override
    public String toString() {
        return "Post{" +
                "id=" + id +
                ", itemName='" + itemName + '\'' +
                ", description='" + description + '\'' +
                ", itemPhoto='" + itemPhoto + '\'' +
                ", expiryDate=" + expiryDate +
                ", quantity=" + quantity +
                '}';
    }
}
