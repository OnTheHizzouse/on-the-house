
USE oth_db;
INSERT INTO users(first_name, last_name, username, email, password, phone_number, address, coordinates, role)
VALUES ('test1FirstName', 'test1LastName', 'test_user_one', 'test1@email.com', 'password1', 1111111111, '762 macbook st, city, state, 51458','32.778732986171384, -96.80576824306469','USER'),
       ('test2FirstName','test2LastName','test_user_two', 'test2@email.com', 'password2', 2222222222, '123 fake st, city, state, 95662', '32.8000000001, -96.80390596389769','USER'),
       ('test3FirstName','test3LastName','test_user_three', 'test3@email.com', 'password3', 3333333333, '485 faker st, city, state, 84574','32.78001345914907, -96.80390596389769','USER');



USE oth_db;
INSERT INTO posts(user_id, item_name, description, item_photo, expiry_date,quantity,status)
VALUES (3, 'Asparagus', 'Totally not rotten', 'test', '22:06:30', 15, 'OPEN'),
       (2, 'Cream of Mushroom Soup', 'Still in can', 'test', '22:06:29', 1, 'OPEN'),
       (2, 'Macaroni and Cheese', 'Homemade and delicious', 'test', '22:06:10', 5, 'CLOSED'),
       (3, 'Banana', 'Sex ed fruit', 'photo of bananas', '22:06:9', 2, 'CLOSED'),
       (3, 'Half a Sandwich', 'Half eaten sandwich...clean had just brushed my teeth', 'photo of a sandwich', '22:06:9', 1, 'OPEN'),
       (2, 'Red Energy Drink', 'Amazon bootleg energy that tastes like red.', 'Photo of Red', '25:08:19', 4, 'CLOSED'),
       (1, 'KFC Chicken', 'It''s finger linkin'' good.', 'photo of chicken(dead and cooked/ready to eat)', '22:12:25', 8, 'CLOSED'),
       (2, 'Apples', 'Bag of apples, real apples not computer apple.', 'photo of apples', '22:01:05', 5, 'CLOSED');


USE oth_db;
INSERT INTO events(requester_id, user_id, post_id, meetup_date, meetup_time, meetup_location, status)
    VALUE (1,2,2, '22:06:28', '15:24:00', '123 fake st, city, state, 95662', 'OPEN' ),
    (3,1,7, '22:06:30', '11:24:00', '485 faker st, city, state, 84574', 'CLOSED' );

