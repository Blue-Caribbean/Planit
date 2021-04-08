import React from 'react';
import Login from './intro/Login';
import Signup from './intro/Signup';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';
import requests from '../../requests/requests'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first: null,
        last: null,
        email: null,
        userId: null,
        profilepic: null,
        freetime: [],
      },
      events: [],
      signup: false,
      loggedIn: false,
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
    };
    this.getUserInfo = this.getUserInfo.bind(this);
  }

  getUserInfo() {
    const { userId } = this.state;
    requests.getUserEvents(this, userId);
  }

  render() {
    const app = this;
    const { user, eventsShowing, events, loggedIn, signup } = this.state;
    const { userId } = user;
    if (!loggedIn) {
      return (
        <div id='app'>
          {signup ? <Signup app={app} /> : <Login app={app} /> }
        </div>
      )
    }
    return (
      <div id="appjsx">
<<<<<<< HEAD
        <CalendarComponent app={app} events={events} getUserInfo={this.getUserInfo} />
=======
        <CalendarComponent app={app} events={eventsShowing} getUserInfo={this.getUserInfo} userId={userId} />
>>>>>>> 3715261d05fa54291ea3731c30db063c2f70bd49
        <Sidebar />
        <EventsUpcoming userId={userId} />
      </div>
    );
  }
}

export default App;
