
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
    coordinates VARCHAR(40) NOT NULL,
    role VARCHAR(32) NOT NULL
);

CREATE TABLE posts
(
    id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    item_name VARCHAR(70) NOT NULL,
    description TEXT NOT NULL,
    item_photo VARCHAR(150) NOT NULL,
    expiry_date DATE NOT NULL,
    quantity INT NOT NULL,
    status ENUM('open', 'closed') NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)

);


# CREATE TABLE events
# (
#     id BIGINT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#     requestor_id BIGINT NOT NULL,
#     requestee_id BIGINT NOT NULL,
#     item_id BIGINT NOT NULL,
#     item_name VARCHAR(70) NOT NULL,
#     meetup_date DATE NOT NULL,
#     meetup_time TIME NOT NULL,
#     meetup_location VARCHAR(200),
#     status ENUM('open', 'closed') NOT NULL,
#     FOREIGN KEY (requestor_id) REFERENCES users(id),
#     FOREIGN KEY (requestee_id) REFERENCES users(id),
#     FOREIGN KEY (item_id) REFERENCES posts(id)
#
# );
#
# # CREATES event_id COLUMN IN POSTS TABLE AND ADDS FOREIGN KEY
# ALTER TABLE posts
#     ADD COLUMN event_id BIGINT NOT NULL
#     AFTER user_id;
#
# ALTER TABLE posts
#     ADD FOREIGN KEY (event_id) REFERENCES events(id);