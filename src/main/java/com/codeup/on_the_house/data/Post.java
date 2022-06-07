package com.codeup.on_the_house.data;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="posts")
public class Post {

//    ******* properties ******
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private Long id;
    private String itemName;
    private String description;
    private String itemPhoto;
    private Date expiryDate;
    private int quantity;

//    ***** constructor *******


    public Post(Long id, String itemName, String description, String itemPhoto, Date expiryDate, int quantity) {
        this.id = id;
        this.itemName = itemName;
        this.description = description;
        this.itemPhoto = itemPhoto;
        this.expiryDate = expiryDate;
        this.quantity = quantity;
    }

    public Post() {
    }

//    ******** getters and setters *******


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

    public Date getExpiryDate() {
        return expiryDate;
    }

    public void setExpiryDate(Date expiryDate) {
        this.expiryDate = expiryDate;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
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
