package com.codeup.on_the_house.dto;

import java.sql.Date;
import java.time.LocalDate;

public class CreatePostDTO {

//    *****properties *****

    private String itemName;
    private String description;
    private String itemPhoto;
    private LocalDate expiryDate;
    private int quantity;

//    ***** Constructor ******

    public CreatePostDTO(String itemName, String description, String itemPhoto, LocalDate expiryDate, int quantity) {
        this.itemName = itemName;
        this.description = description;
        this.itemPhoto = itemPhoto;
        this.expiryDate = expiryDate;
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
}
