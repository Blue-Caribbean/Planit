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

const getFriends = (userId) => {
  //give me the user Id
  axios({
    url: `/api/${userId}/friends`,
    method: 'get'
  })
}

const getGroups = (userId) => {
  axios({
    url: `/api/${userId}/groups`,
    method: 'get'
  })
}

const updateFreeTime = (userId, freeTime) => {
  axios.put(`/api/${userId}/updatefreetime`, {freeTime})
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
