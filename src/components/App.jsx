import React from 'react';
import Login from './intro/Login';
import Signup from './intro/Signup';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';
import requests from '../../functions/requests';

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
      addEventsForGroupClicked: false,
      clickedGrouptoAddEventsTo: '',
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
    this.addEventsToGroup = this.addEventsToGroup.bind(this);
  }

  getUserInfo() {
    const { user } = this.state;
    requests.getUserEvents(user.id, (err, data) => {
      this.setState({
        eventsShowing: data,
      });
    });
  }

  addEventsToGroup(groupID) {
    this.setState({
      addEventsForGroupClicked: true,
      clickedGrouptoAddEventsTo: groupID,
    });
  }

  render() {
    const app = this;
    const { user, eventsShowing, events, loggedIn, signup } = this.state;
    const { id } = user;
    if (!loggedIn) {
      return (
        <div className="login-outer-div">
          <div id="app" className="login-signup">
            {signup ? <Signup app={app} /> : <Login app={app} />}
          </div>
        </div>
      );
    }
    return (
      <div id="appjsx">
        <CalendarComponent app={app} events={events} getUserInfo={this.getUserInfo} user={user} userId={id} />
        <Sidebar userID={id} />
        <EventsUpcoming userId={id} events={events}/>
      </div>
    );
  }
}

export default App;
