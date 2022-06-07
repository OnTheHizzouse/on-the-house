package com.codeup.on_the_house.dto;

import java.sql.Date;

public class CreatePostDTO {

//    *****properties *****

    private String itemName;
    private String description;
    private String itemPhoto;
    private Date date;
    private int quantity;

//    ***** Constructor ******

    public CreatePostDTO(String itemName, String description, String itemPhoto, Date date, int quantity) {
        this.itemName = itemName;
        this.description = description;
        this.itemPhoto = itemPhoto;
        this.date = date;
        this.quantity = quantity;
    }

    public CreatePostDTO() {
    }

//    ***** getters and setters *******

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
