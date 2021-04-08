const axios = require('axios');

const login = (app, paramObj) => {
  axios.get('/api/auth', paramObj).then((data) => {
    const { user, freetime } = data.data;
    app.setState({ user: user });
  });
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