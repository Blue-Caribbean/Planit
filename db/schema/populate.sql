\c planit;

-- Create some users
INSERT INTO users (first, last, email, profilepic) VALUES ('ross', 'russell', 'ross.russell@protonmail.com', 'https://wallpapercave.com/wp/nbn433S.jpg');

INSERT INTO users (first, last, email, profilepic) VALUES ('joe', 'smith', 'joe@joesmith.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('emily', 'smith', 'emily@smith.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('jack', 'pronske', 'jack@pronske.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('austin', 'killough', 'austin@killough.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('lerroy', 'mwaghore', 'lerroy@mwaghore.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('laura', 'neilson', 'laura@neilson.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('nick', 'sabadicci', 'nick@sabadicci.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('zach', 'shold', 'zach@shold.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

INSERT INTO users (first, last, email, profilepic) VALUES ('kevin', 'whiskers', 'kevin@whiskers.com', 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png');

-- emily and joe are friends.
-- This query at the end point won't be a join,
-- We'll know the id of the friend, and the id of the user.
INSERT INTO friends (user_id, friend_id)  VALUES (1, 2);
--Double join so that we can have the relation work both ways, may not be necessary.
INSERT INTO friends (user_id, friend_id) VALUES (2, 1);
--linking jack to 5 friends
INSERT INTO friends (user_id, friend_id) VALUES (4, 1);
INSERT INTO friends (user_id, friend_id) VALUES (1, 4);

INSERT INTO friends (user_id, friend_id) VALUES (4, 2);
INSERT INTO friends (user_id, friend_id) VALUES (2, 4);

INSERT INTO friends (user_id, friend_id) VALUES (4, 3);
INSERT INTO friends (user_id, friend_id) VALUES (3, 4);

INSERT INTO friends (user_id, friend_id) VALUES (4, 5);
INSERT INTO friends (user_id, friend_id) VALUES (5, 4);

INSERT INTO friends (user_id, friend_id) VALUES (4, 6);
INSERT INTO friends (user_id, friend_id) VALUES (6, 4);

-- create a couple of groups
INSERT INTO groups (group_name, private) VALUES('The group for debate about which species of banana is the most resilient', 0);
INSERT INTO groups (group_name, private) VALUES('Night bicycling', 1);
INSERT INTO groups (group_name, private) VALUES('DND Group', 1);
INSERT INTO groups (group_name, private) VALUES('Bowling Team', 1);
INSERT INTO groups (group_name, private) VALUES('Book Club', 1);
INSERT INTO groups (group_name, private) VALUES('Online Baking Class', 0);
INSERT INTO groups (group_name, private) VALUES('Paint By Numbers Gathering', 0);
INSERT INTO groups (group_name, private) VALUES('Jacks 30th', 1);
INSERT INTO groups (group_name, private) VALUES('Drum Circle in Park', 0);

-- put a couple people into some groups.
INSERT INTO user_to_group (user_id, group_id) VALUES (2, 1);
INSERT INTO user_to_group (user_id, group_id) VALUES (2, 2);
--add jack to most of the groups
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 1);
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 2);
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 4);
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 7);
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 8);
INSERT INTO user_to_group (user_id, group_id) VALUES (4, 9);


-- Free time for user
INSERT INTO freetime (user_id, start, end_time) VALUES(1, '2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(2, '2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z');
--free time for jack
INSERT INTO freetime (user_id, start, end_time) VALUES(4, '2021-04-09T23:35:18.415Z', '2021-04-10T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(4, '2021-04-10T23:35:18.415Z', '2021-04-11T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(4, '2021-04-11T23:35:18.415Z', '2021-04-12T05:32:43.824Z');

INSERT INTO freetime (user_id, start, end_time) VALUES(2, '2021-04-09T23:35:18.415Z', '2021-04-10T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(2, '2021-04-10T23:35:18.415Z', '2021-04-11T05:32:43.824Z');

INSERT INTO freetime (user_id, start, end_time) VALUES(1, '2021-04-09T23:35:18.415Z', '2021-04-10T05:32:43.824Z');
INSERT INTO freetime (user_id, start, end_time) VALUES(1, '2021-04-11T23:35:18.415Z', '2021-04-12T05:32:43.824Z');

-- create event
INSERT INTO event (name, start_time, end_time, group_id) VALUES('riding a bicycle', '2021-04-06T23:35:18.415Z', '2021-04-07T05:32:43.824Z', 1);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Tournament 1', '2021-04-09T17:35:18.415Z', '2021-04-09T19:32:43.824Z', 4);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Tournament 2', '2021-04-10T17:35:18.415Z', '2021-04-10T19:32:43.824Z', 4);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Catch 22 Night', '2021-04-08T15:35:18.415Z', '2021-04-08T16:32:43.824Z', 5);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Giraffe Painting', '2021-04-10T09:35:18.415Z', '2021-04-10T10:32:43.824Z', 7);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Wolf Painting', '2021-04-10T11:35:18.415Z', '2021-04-10T12:32:43.824Z', 7);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('Dinner', '2021-04-07T17:35:18.415Z', '2021-04-07T18:32:43.824Z', 8);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('After Party', '2021-04-07T19:35:18.415Z', '2021-04-07T21:32:43.824Z', 8);
INSERT INTO event (name, start_time, end_time, group_id) VALUES('3rd Gathering of the Year', '2021-04-12T20:35:18.415Z', '2021-04-12T21:32:43.824Z', 9);

-- users_to_events
INSERT INTO users_to_events (user_id, event_id) VALUES (2, 1);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 2);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 3);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 4);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 5);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 6);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 7);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 8);
INSERT INTO users_to_events (user_id, event_id) VALUES (4, 9);


