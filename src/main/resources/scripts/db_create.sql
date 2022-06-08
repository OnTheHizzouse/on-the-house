DROP DATABASE IF EXISTS oth_db;
CREATE DATABASE IF NOT EXISTS oth_db;

USE oth_db;
CREATE TABLE users
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(60) NOT NULL,
    last_name VARCHAR(60) NOT NULL,
    username VARCHAR(60) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(60) NOT NULL,
    phone_number VARCHAR(13) NOT NULL,
    address VARCHAR(200) NOT NULL,
    role VARCHAR(32) NOT NULL
);

CREATE TABLE posts
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    item_name VARCHAR(70) NOT NULL,
    description TEXT NOT NULL,
    item_photo VARCHAR(150) NOT NULL,
    post_expiry_date DATE NOT NULL,
    quantity INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

