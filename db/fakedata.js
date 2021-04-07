const moment = require('moment');

moment().format();

const freeTimeObject = {
  // user_id blank for testing.
  start: moment().toISOString(),
  end_time: moment().add(1, 'hours').toISOString(),
};

const fakeUserObject = {
  first: 'Bill',
  last: 'Jones',
  email: 'some@something.com',
  profilepic:
    'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png',
  freetime: [freeTimeObject],
};

module.exports = {
  fakeUserObject,
  freeTimeObject,
};
