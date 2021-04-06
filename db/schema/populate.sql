\c planit;

-- Create some users
INSERT INTO users (first, last, email, profilepic) VALUES ('ross', 'russell', 'ross.russell@protonmail.com', 'https://wallpapercave.com/wp/nbn433S.jpg');

INSERT INTO users (first, last, email, profilepic) VALUES ('joe', 'smith', 'joe@joesmith.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('emily', 'smith', 'emily@smith.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

-- emily and joe are friends.
-- This query at the end point won't be a join,
-- We'll know the id of the friend, and the id of the user.
INSERT INTO friends (user_id, friend_id)  VALUES (1, 2);
--Double join so that we can have the relation work both ways, may not be necessary.
INSERT INTO friends (user_id, friend_id) VALUES (2, 1);

-- create a couple of groups
INSERT INTO groups (group_name, private) VALUES('The group for debate about which species of banana is the most resilient', 0);
INSERT INTO groups (group_name, private) VALUES('Night bicycling', 1);

-- put a couple people into some groups.
INSERT INTO user_to_group (user_id, group_id) VALUES (2, 1);
INSERT INTO user_to_group (user_id, group_id) VALUES (2, 2);

-- Free time for user
INSERT INTO freetime (user_id, start, end_time) VALUES(1,'2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(2, '2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z');

-- create event
INSERT INTO event (name, start_time, end_time, group_id) VALUES('riding a bicycle', '2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z', 1);

-- users_to_events
INSERT INTO users_to_events (user_id, event_id) VALUES (2, 1);


