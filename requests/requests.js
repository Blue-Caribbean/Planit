const axios = require('axios');

const login = (app, paramObj) => {
  axios.get('api/auth', paramObj).then((data) => {
    const { user, freetime } = data.data;
    app.setState({ user: user });
  });
};
