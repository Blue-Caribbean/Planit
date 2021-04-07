import React from 'react';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar';
import EventsUpcoming from './carousel/EventsUpcoming';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventsShowing: [
        {
          id: 0,
          title: 'Example Event (Example Group)',
          start: new Date(2021, 3, 0, 3, 20, 0),
          end: new Date(2021, 3, 0, 3, 45, 0),
        },
      ],
    };
  }

  componentDidMount() {
    this.userLoginInfo();
  }

  getUserInfo(userName) {
    // make get request with username

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

  userLoginInfo() {
    const userName = window.prompt('Username: ');
    this.getUserInfo(userName);
  }

  render() {
    const app = this;
    const { eventsShowing } = this.state;
    return (
      <div id="app">
        <CalendarComponent app={app} events={eventsShowing} />
        <Sidebar />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
