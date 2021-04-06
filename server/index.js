const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());

app.get('/api/:userid/groups', (req, res) => {
  // get all groups for this user id and return them.
  res.status(500).send('Fatal no data.');
});

app.get('/api/:userid/friends', (req, res) => {
  // get all friends.
  res.status(500).send('Fatal no data.');
});

app.listen(port, () => {
  console.log('express is on port ' + port);
});
