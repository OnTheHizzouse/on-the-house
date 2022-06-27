package com.codeup.on_the_house.data;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Table(name = "users")
public class User {

    //********* properties *******
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private String phoneNumber;
    private String coordinates;
    private String address;
    //    @EMUN ENFORCES THAT THE EMUN VALUE IS A STRING, NOT AN INT.
    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;

    public enum Role {USER, ADMIN}

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties("user")// we want to ignore the post.user field to prevent a StackOverflowError
    private List<Post> posts = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user", "requesterEvents"})
    private List<DonorEvent> donorEvents = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    @JsonIgnoreProperties({"user", "donorEvents", "requesterEvents"})
    private List<RequesterEvent> requesterEvents =  new ArrayList<>();

    //    ******** constructors ********
    public User(Long id, String firstName, String lastName, String username, String email, String password, String phoneNumber, String coordinates,String address) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.coordinates = coordinates;
        this.address = address;
    }

    public User(String firstName, String lastName, String username, String email, String password, String phoneNumber, String coordinates, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.phoneNumber = phoneNumber;
        this.coordinates = coordinates;
        this.address = address;
    }

    public User(String firstName, String lastName, String username, String email, String phoneNumber, String coordinates, String address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.coordinates = coordinates;
        this.address = address;
    }


    public User() {
    }

    //    ********** getters and setters ***********
//    **********POST AND EVENT GETTERS AND SETTERS *******
    public List<Post> getPosts() {
        return posts;
    }

    public void setPosts(List<Post> posts) {
        this.posts = posts;
    }

    public List<DonorEvent> getDonorEvents() {
        return donorEvents;
    }

    public void setDonorEvents(List<DonorEvent> donorEvents) {
        this.donorEvents = donorEvents;
    }

    public List<RequesterEvent> getRequesterEvents() {
        return requesterEvents;
    }

    public void setRequesterEvents(List<RequesterEvent> requesterEvents) {
        this.requesterEvents = requesterEvents;
    }

    //****************************************


    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(String coordinates) {
        this.coordinates = coordinates;
    }

//    ********* to String ***********

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", username='" + username + '\'' +
                ", email='" + email + '\'' +
                ", password='" + password + '\'' +
                ", phoneNumber='" + phoneNumber + '\'' +
                ", coordinates='" + coordinates + '\'' +
                ", address='" + address + '\'' +
                ", role=" + role +
                ", posts=" + posts +
                ", donorEvents=" + donorEvents +
                '}';
    }
}
