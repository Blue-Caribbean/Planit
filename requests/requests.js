const axios = require('axios');

const login = (app, paramObj, callback) => {
  axios.post('/api/auth', paramObj)
    .then((data) => {
      const { user } = data.data;
      callback(null, user);
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


const getUserEvents = (app, userId) => {
  axios({
    method: 'get',
    url: `/api/${userId}/userevents`,
  })
  .then((data)=>{
    app.setState({eventsShowing: data.data})
  })
  .catch((err)=> {
    console.error(err);
  })
};

module.exports = {
  getUserEvents,
  updateFreeTime,
  createUser,
  login,
  createGroup,
  updateFreeTime,
  getFriends,
  getGroups,
}
