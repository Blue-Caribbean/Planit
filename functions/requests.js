const axios = require('axios');

const login = (app, paramObj, callback) => {
  axios.post('/api/auth', paramObj)
    .then((data) => {
      callback(null, data.data);
  })
    .catch(err => {
      callback(err)
    })
};

const createUser = (app, paramObj, callback) => {
  axios.post('/api/createuser', {
    user: paramObj
  })
  .then(callback(null))
  .catch((err) => {callback(err)})
};

const getFriends = (userId, callback) => {
  //give me the user Id
  axios({
    url: `/api/${userId}/friends`,
    method: 'get'
  }).then((data) => {
    callback(null, data.data);
  }).catch((err) => {
    callback(err, null);
  })
}

const getGroups = (userId, callback) => {
  axios({
    url: `/api/${userId}/groups`,
    method: 'get'
  }).then((data) => {
    callback(null, data.data);
  }).catch((err) => {
    callback(err, null);
  })
}

const updateFreeTime = (userId, freeTimeObj) => {
  axios.put(`/api/${userId}/updatefreetime`, freeTimeObj)
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      console.error(err);
    })
};

const createGroup = (userId, groupObj) => {
  //give user id and group obj formatted like the group schema
  axios({
    method: 'post',
    url: `/api/${userid}/creategroup`,
    data: groupObj
  })
}


const getUserEvents = (app, userid, callback) => {
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

module.exports = {
  getUserEvents,
  updateFreeTime,
  createUser,
  login,
  createGroup,
  getFriends,
  getGroups,
}
