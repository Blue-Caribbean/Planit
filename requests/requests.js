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
}

const updateFreeTime = (userId, freeTimeObj) => {
  axios.put(`/api/${userId}/updatefreetime`, freeTimeObj)
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      console.log(err);
    })
};

const createGroup = (userId, groupObj) => {
  axios({
    method: 'post',
    url: `/api/${userid}/creategroup`,
    data: groupObj
  })
}


const getUserEvents = (app, userid) => {
  axios({
    method: 'get',
    url: `/api/${userid}/userevents`,
  })
  .then((data)=>{
    //Lerroy check this out
    app.setState({eventsShowing: data.res})
  })
  .catch((err)=> {
    console.error(err);
  })
}

module.exports = {
  getUserEvents,
  createUser,
  login,
  createGroup,
  updateFreeTime
}
