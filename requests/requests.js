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


module.exports = {
  createUser,
  login,
}