
USE oth_db;
INSERT INTO users(first_name, last_name, username, email, password, phone_number, address, coordinates, role)
VALUES ('test1FirstName', 'test1LastName', 'test_user_one', 'test1@email.com', 'password1', 1111111111, '762 macbook st, city, state, 51458','32.778732986171384, -96.80576824306469','USER'),
       ('test2FirstName','test2LastName','test_user_two', 'test2@email.com', 'password2', 2222222222, '123 fake st, city, state, 95662', '30.29441989934175, -97.73147677171973','USER'),
       ('test3FirstName','test3LastName','test_user_three', 'test3@email.com', 'password3', 3333333333, '485 faker st, city, state, 84574','29.349327064462532, -98.44587073443981','USER');



USE oth_db;
INSERT INTO posts(user_id, item_name, description, item_photo, expiry_date,quantity,status)
VALUES (3, 'Asparagus', 'Totally not rotten', 'test', '22:06:30', 15, 'open'),
       (2, 'Cream of Mushroom Soup', 'Still in can', 'test', '22:06:29', 1, 'open'),
       (2, 'Macaroni and Cheese', 'Homemade and delicious', 'test', '22:06:10', 5, 'closed'),
       (3, 'Banana', 'Sex ed fruit', 'photo of bananas', '22:06:9', 2, 'closed'),
       (3, 'Half a Sandwich', 'Half eaten sandwich...clean had just brushed my teeth', 'photo of a sandwich', '22:06:9', 1, 'open'),
       (2, 'Red Energy Drink', 'Amazon bootleg energy that tastes like red.', 'Photo of Red', '25:08:19', 4, 'closed'),
       (1, 'KFC Chicken', 'It''s finger linkin'' good.', 'photo of chicken(dead and cooked/ready to eat)', '22:12:25', 8, 'closed'),
       (2, 'Apples', 'Bag of apples, real apples not computer apple.', 'photo of apples', '22:01:05', 5, 'open');


USE oth_db;
INSERT INTO events(requestor_id, requestee_id, item_id, item_name, meetup_date, meetup_time, meetup_location, status)
    VALUE (1,2,3,'Macaroni and Cheese', '22:06:28', '15:24:00', '123 fake st, city, state, 95662', 'open' ),
    (3,1,6,'Red Energy Drink', '22:06:30', '11:24:00', '485 faker st, city, state, 84574', 'closed' );
