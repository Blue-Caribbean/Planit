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

-- FIXME: Eventually need to create some free time objects. I'll grab these from moment when I start up the app.

-- Same


