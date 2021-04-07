const pg = require('./index.js');
const fakeData = require('./fakedata.js');

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

module.exports = {
  createUser,
};
