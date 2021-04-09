const mRange = require('moment-range');
const Moment = require('moment');
const pg = require('./index.js');
const moment = mRange.extendMoment(Moment);
moment().format();

const getGroupFreeTime = (groupId, cb) => {
  const query =
    'select * from user_to_group join freetime on user_to_group.user_id=freetime.user_id where user_to_group.group_id=$1';
  pg.pool.query(query, [groupId], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows);
    }
  });
};

const getGroupBestFreeTime = (groupId, cb) => {
  const query =
    'select * from user_to_group join freetime on user_to_group.user_id=freetime.user_id where user_to_group.group_id=$1';
  pg.pool.query(query, [groupId], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      // FIXME: This is a nieve solution, but it's super cpu heavy. Need to improve the algo.
      // Process all of the time objects, we don't care about explicit date, just days.
      // Start by sorting all the freetime objects by day.

      // First we'll create an object that contains all of the available times sorted by day, using starting on
      // Store the largest amount of freetime slots key so that we don't have to iterate the object a second time.

      let largest = 1; // Set to 1 because if everyone is spread out it's better to just return the freetime obj, there is no ideal time.
      let largestKey = '';
      const availableDays = {};
      result.rows.forEach((timeObj) => {
        const day = moment(timeObj.start).format('ddd');
        if (!availableDays[day]) {
          availableDays[day] = [timeObj];
        } else {
          availableDays[day].push(timeObj);
          if (availableDays[day].length > largest) {
            largest = availableDays[day].length;
            largestKey = day;
          }
        }
      });

      // Hone in on freetimes on the most available day.
      const ranges = [];
      const overlap = {};
      if (largest > 1) {
        // Another pass on the data, this time we're looking for times that intersect.
        // First sort the array based on earliest start time.
        availableDays[largestKey].sort((a, b) => moment(a.start) - moment(b.start));
        // Create our range objects
        availableDays[largestKey].forEach((timeObj) => {
          ranges.push(moment.range(timeObj.start, timeObj.end_time));
        });
        // Iterate range objects and look for overlaps.
        for (let i = 0; i < ranges.length; i++) {
          for (let j = i + 1; j < ranges.length; j++) {
            if (ranges[j].contains(ranges[i])) {
              overlap[`${i}${j}`] = { start: ranges[j].start, end: ranges[j].end };
            }
          }
        }
        cb(null, overlap);
      } else {
        cb(null, availableDays);
      }
    }
  });
};

const checkUser = ({ email }, cb) => {
  pg.pool.query('SELECT * FROM users WHERE email=$1', [email], (err, result) => {
    if (err) {
      cb(err, null);
    } else if (result.rows[0] === undefined) {
      cb(null, false);
    } else {
      const returnObj = { ...result.rows[0] };
      pg.pool.query('SELECT * FROM freetime WHERE user_id=$1', [returnObj.id], (error, resul) => {
        if (error) {
          cb(error, null);
        } else {
          returnObj.freetime = resul.rows;
          cb(error, returnObj);
        }
      });
    }
  });
};

const createUser = (userObj, cb) => {
  const { first, last, email, profilepic } = userObj;
  let userId;

  pg.pool.query(
    'INSERT INTO users(first, last, email, profilepic) VALUES ($1, $2, $3, $4) RETURNING id;',
    [first, last, email, profilepic],
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        userId = result.rows[0].id;
        cb(null, userId);
      }
    }
  );
};

const updateFreeTime = (userId, freeTimeArray, cb) => {
  // First remove all freetime for the user since this is an update.
  pg.pool.query('DELETE FROM freetime WHERE user_id=$1', [userId], (err) => {
    if (err) {
      cb(err, null);
    } else {
      // Another slow query here. It might make more sense to use 2d array. [[date start, date end],] timestamp[][]
      freeTimeArray.forEach((obj) => {
        pg.pool.query(
          'INSERT INTO freetime (user_id, start, end_time) VALUES ($1, $2, $3)',
          [userId, obj.start, obj.end],
          (error, result) => {
            if (error) {
              cb(error, null);
            } else {
              cb(null, result);
            }
          }
        );
      });
    }
  });
};

const addToGroup = (userId, groupObj, cb) => {
  pg.pool.query(
    'INSERT INTO user_to_group (user_id, group_id) VALUES ($1, $2)',
    [userId, groupObj.group_id],
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result);
      }
    }
  );
};
const createGroupByUserId = (user_id, obj, cb) => {
  const sql = 'INSERT INTO groups (group_name, private) VALUES ($1, $2) RETURNING id';
  pg.pool.query(sql, [obj.group_name, obj.private], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      const groupObj = { group_id: results.rows[0].id };
      addToGroup(user_id, groupObj, (err2, results2) => {
        if (err) {
          cb(err2, null);
        } else {
          cb(null, results2);
        }
      });
    }
  });
};
const getAllGroups = ({ group_name }, cb) => {
  pg.pool.query(
    'SELECT * FROM groups WHERE group_name like $1',
    [`%${group_name}%`],
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, result.rows);
      }
    }
  );
};

const getGroupsById = (userId, cb) => {
  // Get all users groups from user_to_group based on user id,
  // join the group_id on groups_name
  const sql = 'SELECT * FROM user_to_group, groups WHERE group_id = groups.id AND user_id = ($1)';
  pg.pool.query(sql, [userId], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
    }
  });
};

const createEventByGroupId = (groupId, eventObj, cb) => {
  const { name, start_time, end_time } = eventObj;
  const sql = 'INSERT INTO event (name, start_time, end_time, group_id) VALUES ($1, $2, $3, $4)';
  //this query creates the event
  pg.pool.query(sql, [name, start_time, end_time, groupId], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      // now i pull the userids from the group id
      let sql2 = 'select user_id from user_to_group where group_id = $1';
      pg.pool.query(sql2, [groupId], (err2, results2) => {
        if (err2) {
          cb(err2, null);
        } else {
          const { rows } = results2;
          const sql3 = 'INSERT INTO users_to_events (user_id, event_id) VALUES ($1, $2)';
          //for each of them - insert into the join table
          rows.forEach((idObj) => {
            pg.pool.query(sql3, [idObj.user_id, groupId]);
          });
          cb(null, 'done');
        }
      });
    }
  });
};

/*
--------------- FRIENDS ---------------
*/
const searchFriends = ({ email }, cb) => {
  pg.pool.query('SELECT * FROM users WHERE email=$1', [email], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows[0]);
    }
  });
};

const addFriend = (userID, friendID, cb) => {
  const sql = `INSERT INTO friends (user_id, friend_id) VALUES (${userID}, ${friendID}), (${friendID}, ${userID});`;
  pg.pool.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const deleteFriend = (userID, friendID, cb) => {
  const sql = `DELETE FROM friends WHERE (user_id = ${userID} AND friend_id = ${friendID})`;
  const sqlTwo = `DELETE FROM friends WHERE (user_id = ${friendID} AND friend_id = ${userID})`;
  pg.pool.query(sql, (err) => {
    if (err) {
      cb(err);
    } else {
      pg.pool.query(sqlTwo, (errTwo, dataTwo) => {
        if (errTwo) {
          cb(errTwo);
        } else {
          cb(null, dataTwo);
        }
      });
    }
  });
};

const getFriends = (userID, cb) => {
  const sql = `SELECT first, last FROM users INNER JOIN (SELECT friend_id FROM users INNER JOIN friends ON users.id = friends.user_id WHERE users.id = ${userID}) AS con ON users.id = con.friend_id;`;
  pg.pool.query(sql, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};

const getUserEvents = (userId, cb) => {
  // We need to get all events by user id.
  // Search users_to_events,
  const query =
    'select users_to_events.id as ute_id, users_to_events.user_id as ute_uid, users_to_events.event_id as ute_event_id, users_to_events.pending, users_to_events.accepted, event.name as event_name, event.start_time, event.end_time, event.group_id as egroup, groups.group_name from users_to_events join event on event.id=users_to_events.id join groups on event.group_id=groups.id where users_to_events.user_id=$1';
  pg.pool.query(query, [userId], (err, result) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, result.rows);
    }
  });
};

module.exports = {
  createUser,
  updateFreeTime,
  addToGroup,
  searchFriends,
  checkUser,
  getFriends,
  addFriend,
  getAllGroups,
  getGroupsById,
  createEventByGroupId,
  getUserEvents,
  deleteFriend,
  createGroupByUserId,
  getGroupFreeTime,
  getGroupBestFreeTime,
};
