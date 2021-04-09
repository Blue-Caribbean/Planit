const express = require('express');
const queries = require('../db/queries.js');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/:groupid/groupfreetime', (req, res) => {
  // Returns an array of freetime objects for all users in the group.
  queries.getGroupFreeTime(req.params.groupid, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/api/searchfriends', (req, res) => {
  queries.searchFriends(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/api/auth', (req, res) => {
  console.log(req.body);
  // Check for user in db, if no user create new user.
  // send back id if user exists.
  // if the user doesn't exist handle on the frontend.
  queries.checkUser(req.body, (err, result) => {
    if (err) {
      res.status(401).send(err);
    } else {
      res.status(201).send(result);
    }
  });
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
  queries.createUser(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result.toString());
    }
  });
});
app.post('/api/:userid/creategroup', (req, res) => {
  queries.createGroupByUserId(req.params.userid, req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.put('/api/:userid/updatefreetime', (req, res) => {
  // user_id to select, and clear all existing free time relating to that user.
  // then insert the new freetime.

  queries.updateFreeTime(req.params.userid, req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      debugger;
      res.status(200).end()
    }
  });
});

app.post('/api/:userid/addfriend', (req, res) => {
  // takes user id of friend, and user id param and adds friend.
  // double post to db.
  queries.addFriend(req.params.userid, req.body.friend_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send(data);
    }
  });
});

app.delete('/api/:userid/deletefriend', (req, res) => {
  // gets user id, deletes friendship.
  // another double query.
  queries.deleteFriend(req.params.userid, req.body.friend_id, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(202).send(data);
    }
  });
});

app.post('/api/searchfriends', (req, res) => {
  // Searches the db for email or name string that matches query.
  // returns list of names which comes along with id.
  queries.searchFriends(req.body, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/api/:userid/groups', (req, res) => {
  queries.getGroupsById(req.params.userid, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.post('/api/groups', (req, res) => {
  queries.getAllGroups(req.body, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/api/:userid/addtogroup', (req, res) => {
  // Takes an object {group_id: idOFgroup}
  // adds that user to usertogroup join.
  queries.addToGroup(req.params.userid, req.body.group_id, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.get('/api/:userid/friends', (req, res) => {
  queries.getFriends(req.params.userid, (err, data) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/api/:userid/userevents', (req, res) => {
  // actually not so bad.
  queries.getUserEvents(req.params.userid, (err, result) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(result);
    }
  });
});

app.post('/api/:groupid/event', (req, res) => {
  queries.createEventByGroupId(req.params.groupid, req.body, (err, results) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`express is on port ${port}`);
});
