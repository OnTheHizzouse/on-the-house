USE oth_db;
INSERT INTO users(first_name, last_name, username, email, password, phone_number, address, role)
VALUES ('test1FirstName', 'test1LastName', 'test_user_one', 'test1@email.com', 'password1', 1111111111, '3601 Conti St. New Orleans, LA 70119', 'USER'),
       ('test2FirstName','test2LastName','test_user_two', 'test2@email.com', 'password2', 2222222222, '359 Bayless Ln. Duncanville, TX 75116', 'USER'),
       ('test3FirstName','test3LastName','test_user_three', 'test3@email.com', 'password3', 3333333333, '69 Nice St. Paramountplus, TX 90210', 'USER');

INSERT INTO posts(user_id, item_name, description, item_photo, expiry_date, quantity)
VALUES (3, 'Asparagus', 'Totally not rotten', 'test', '22:06:30', 15),
       (2, 'Cream of Mushroom Soup', 'Still in can', 'test', '22:06:29', 1),
       (2, 'Macaroni and Cheese', 'Homemade and delicious', 'test', '22:06:10', 5),
       (1, 'Leftover Pizza Slice', 'Midway Pizza, only pineapple', 'test', '22:06:9', 2);
