const pg = require('./index.js');
const fakeData = require('./fakedata.js');

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
  //FIXME: NO FREE TIME
  pg.pool.query(
    'INSERT INTO users(first, last, email, profilepic) VALUES ($1, $2, $3, $4) RETURNING id;',
    [first, last, email, profilepic],
    (err, result) => {
      if (err) {
        cb(err, null);
      } else {
        userId = result.rows[0].id;
        // This is an expensive operation! Firing asyncs but not waiting for errs, so look out!
        userObj.freetime.forEach((obj) => {
          pg.pool.query('INSERT INTO freetime (user_id, start, end_time) VALUES ($1, $2, $3)', [
            userId,
            obj.start,
            obj.end_time,
          ]);
        });
        cb(null, userId);
      }
    }
  );
};

const updateFreeTime = (userId, freeTimeArray, cb) => {
  // First remove all freetime for the user since this is an update.
  pg.pool.query('DELETE * FROM freetime WHERE user_id=$1', [userId], (err) => {
    if (err) {
      cb(err, null);
    } else {
      // Another slow query here. It might make more sense to use 2d array.
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

const getGroups = (userId, cb) => {
  // Get all users groups from user_to_group based on user id,
  // join the group_id on groups_name
  let sql = 'SELECT * FROM user_to_group, groups WHERE group_id = groups.id AND user_id = ($1)';
  pg.pool.query(sql, [userId], (err, results) => {
    if (err) {
      cb(err, null);
    } else {
      cb(null, results);
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

module.exports = {
  createUser,
  updateFreeTime,
  addToGroup,
  searchFriends,
  checkUser,
  getFriends,
  getAllGroups,
  getGroups,
};
