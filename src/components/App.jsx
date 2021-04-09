import React from 'react';
import Login from './intro/Login';
import Signup from './intro/Signup';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 4,
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
    // make get request with username in state
    // sets state with the events returned
    this.setState({
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
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
    const { userId, eventsShowing, loggedIn, signup } = this.state;
    if (!loggedIn) {
      return <div id="app">{signup ? <Signup app={app} /> : <Login app={app} />}</div>;
    }
    return (
      <div id="appjsx">
        <CalendarComponent app={app} events={eventsShowing} getUserInfo={this.getUserInfo} />
        <Sidebar userID={userId} />
        <EventsUpcoming userId={userId} />
      </div>
    );
  }
}

export default App;
