const express = require('express');
const moment = require('moment');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.post('/api/auth', (req, res) => {
  // Check for user in db, if no user create new user.
  // send back id if user exists.
  // if the user doesn't exist handle on the frontend.
});

app.post('/api/createuser', (req, res) => {
  // New user object.
  /*
  const fakeUserObject = {
  first: 'Bill',
  last: 'Jones',
  email: 'some@something.com',
  profilepic:
    'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png',
  freetime: [{freetimeobjects}]
};
  respond with newly created user id.
*/
});

app.put('/api/:userid/updatefreetime', (req, res) => {
  // user_id to select, and clear all existing free time relating to that user.
  // then insert the new freetime.
});

app.post('/api/:userid/addfriend', (req, res) => {
  // takes user id of friend, and user id param and adds friend.
  // double post to db.
});

app.delete('/api/:userid/deletefriend', (req, res) => {
  // gets user id, deletes friendship.
  // another double query.
});

app.post('/api/searchfriends', (req, res) => {
  // Searches the db for email or name string that matches query.
  // returns list of names which comes along with id.
});

app.get('/api/:userid/groups', (req, res) => {
  // get all groups for this user id and return them.
});

app.post('/api/:userid/addtogroup', (req, res) => {
  // Takes an object {group: idOFgroup}
  // adds that user to usertogroup join.
});

app.get('/api/:userid/friends', (req, res) => {
  // get all friends.
});

app.get('/api/:userid/userevents', (req, res) => {
  //gets user events. this is a huge query very heavy.
});

app.post('/api/:groupid/event', (req, res) => {
  // takes groupid, adds an event object to events table.
});

app.listen(port, () => {
  console.log(`express is on port ${port}`);
});
