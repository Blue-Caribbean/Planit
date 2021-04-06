-- ---
-- Table 'users'
--
-- ---
DROP DATABASE IF EXISTS planit;
CREATE DATABASE planit;
\c planit

DROP TABLE IF EXISTS "users";

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "first" VARCHAR(50),
  "last" VARCHAR(50),
  "email" VARCHAR(50) NOT NULL,
  "profilepic" VARCHAR(250)
);

-- ---
-- Table "friends"
--
-- ---

DROP TABLE IF EXISTS "friends";

CREATE TABLE "friends" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NULL DEFAULT NULL,
  "friend_id" INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id),
  FOREIGN KEY(friend_id) REFERENCES users(id)
);

-- -- ---
-- -- Table "groups"
-- --
-- -- ---

DROP TABLE IF EXISTS "groups";

CREATE TABLE "groups" (
  "id" SERIAL PRIMARY KEY,
  "group_name" VARCHAR(200) NULL DEFAULT NULL,
  "private" INTEGER NULL DEFAULT NULL
);

-- -- ---
-- -- Table "userToGroup"
-- --
-- -- ---

DROP TABLE IF EXISTS "user_to_group";

CREATE TABLE "user_to_group" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NULL DEFAULT NULL,
  "group_id" INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(group_id) REFERENCES groups(id)
);

-- -- ---
-- -- Table "Freetime"
-- --
-- -- ---

DROP TABLE IF EXISTS "freetime";

CREATE TABLE "freetime" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NULL DEFAULT NULL,
  "start" DATE NULL DEFAULT NULL,
  "end" DATE NULL DEFAULT NULL,
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- -- ---
-- -- Table "event"
-- --
-- -- ---

DROP TABLE IF EXISTS "event";

CREATE TABLE "event" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(250) NULL DEFAULT NULL,
  "startTime" DATE NULL DEFAULT NULL,
  "endTime" DATE NULL DEFAULT NULL,
  "group_id" INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(group_id) REFERENCES groups(id)
);

-- -- ---
-- -- Table "usersToEvents"
-- --
-- -- ---

DROP TABLE IF EXISTS "usersToEvents";

CREATE TABLE "usersToEvents" (
  "id" SERIAL PRIMARY KEY,
  "user_id" INTEGER NULL DEFAULT NULL,
  "event_id" INTEGER NULL DEFAULT NULL,
  "pending" INTEGER NULL DEFAULT NULL,
  "accepted" INTEGER NULL DEFAULT NULL,
  FOREIGN KEY(event_id) REFERENCES event(id),
  FOREIGN KEY(user_id) REFERENCES users(id)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE friends FOREIGN KEY (userId) REFERENCES users (id);
-- ALTER TABLE "friends" ADD FOREIGN KEY (friendId) REFERENCES "users" ("id");
-- ALTER TABLE "userToGroup" ADD FOREIGN KEY (userId) REFERENCES "users" ("id");
-- ALTER TABLE "userToGroup" ADD FOREIGN KEY (groupId) REFERENCES "groups" ("id");
-- ALTER TABLE "Freetime" ADD FOREIGN KEY (user) REFERENCES "users" ("id");
-- ALTER TABLE "event" ADD FOREIGN KEY (group) REFERENCES "groups" ("id");
-- ALTER TABLE "usersToEvents" ADD FOREIGN KEY (user) REFERENCES "users" ("id");
-- ALTER TABLE "usersToEvents" ADD FOREIGN KEY (event) REFERENCES "event" ("id");

-- ---
-- Table Properties
-- ---

-- ALTER TABLE "users" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "friends" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "groups" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "userToGroup" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "Freetime" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "event" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE "usersToEvents" ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO "users" ("id","first","last","email","profilepic") VALUES
-- ("","","","","");
-- INSERT INTO "friends" ("id","userId","friendId") VALUES
-- ("","","");
-- INSERT INTO "groups" ("id","groupName","private") VALUES
-- ("","","");
-- INSERT INTO "userToGroup" ("id","userId","groupId") VALUES
-- ("","","");
-- INSERT INTO "Freetime" ("id","user","start","end") VALUES
-- ("","","","");
-- INSERT INTO "event" ("id","name","startTime","endTime","group") VALUES
-- ("","","","","");
-- INSERT INTO "usersToEvents" ("id","user","event","pending","accepted") VALUES
-- ("","","","","");

