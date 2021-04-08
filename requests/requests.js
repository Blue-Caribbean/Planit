const axios = require('axios');

const login = (app, paramObj) => {
  axios.get('api/auth', paramObj).then((data) => {
    const { user, freetime } = data.data;
    app.setState({ user: user });
  });
};

const updateFreeTime = (userId, freeTimeObj) => {
  axios.put(`/api/${userId}/updatefreetime`, freeTimeObj)
    .then(() => {
      console.log('done')
    })
    .catch((err) => {
      console.error(err);
    })
};


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
}

module.exports = {
  getUserEvents,
  updateFreeTime
}
