import React from 'react';
import Login from './Login.jsx';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
      loggedIn: false,
    };
    this.getUserInfo = this.getUserInfo.bind(this);
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

  render() {
    const app = this;
    const { eventsShowing, loggedIn } = this.state;
    if (!loggedIn) {
      return <Login app={app} />;
    }
    return (
      <div id="app">
        <CalendarComponent app={app} events={eventsShowing} getUserInfo={this.getUserInfo} />
        <Sidebar />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
