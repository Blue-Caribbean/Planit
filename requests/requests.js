const axios = require('axios');

const login = (app, paramObj) => {
  axios.get('api/auth', paramObj).then((data) => {
    const { user, freetime } = data.data;
    app.setState({ user: user });
  });
};

const getUserEvents = (app, userid) => {
  axios({
    method: 'get',
    url: `/api/${userid}/userevents`,
  })
  .then((data)=>{
    //Leeroy check this out
    app.setState({eventsShowing: data.res})
  })
  .catch((err)=> {
    console.error(err);
  })
}

module.exports = {
  getUserEvents
}