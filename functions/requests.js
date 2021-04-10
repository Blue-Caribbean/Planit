const axios = require('axios');

const login = (paramObj, callback) => {
  axios.post('/api/auth', paramObj)
    .then((data) => {
      callback(null, data.data);
  })
    .catch(err => {
      callback(err)
    })
};

const createUser = (paramObj, callback) => {
  axios.post('/api/createuser', paramObj)
  .then(callback(null))
  .catch(err => {
    callback(err)
  });
};

const getFriends = (userId, callback) => {
  //give me the user Id
  axios({
    url: `/api/${userId}/friends`,
    method: 'get'
  }).then((data) => {
    callback(null, data.data.rows);
  }).catch((err) => {
    callback(err, null);
  })
}

const getGroups = (userId, callback) => {
  axios({
    url: `/api/${userId}/groups`,
    method: 'get'
  }).then((data) => {
    callback(null, data.data.rows);
  }).catch((err) => {
    callback(err, null);
  })
}

const updateFreeTime = (userId, freeTime, callback) => {
  debugger;
  axios.put(`/api/${userId}/updatefreetime`, freeTime)
    .then(() => {
      callback(null);
    })
    .catch((err) => {
      callback(err);
    })
};

const createGroup = (userId, groupObj) => {
  // give user id and group obj formatted like the group schema
  axios({
    method: 'post',
    url: `/api/${userId}/creategroup`,
    data: groupObj
  })
}


const getUserEvents = (userid, callback) => {
  axios({
    method: 'get',
    url: `/api/${userid}/userevents`,
  })
  .then((data)=> {
    callback(null, data.data)
  })
  .catch((err)=> {
    callback(err);
  })
};

const createGroupEvent = (app, groupid, eventsObj, callback) => {
  axios.post(`/api/${groupid}/event`, eventsObj)
  .then(callback(null))
  .catch((err) => {callback(err)})
};

module.exports = {
  getUserEvents,
  updateFreeTime,
  createUser,
  login,
  createGroup,
  getFriends,
  getGroups,
  createGroupEvent,
}
