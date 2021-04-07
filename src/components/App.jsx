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
        {
          id: 1,
          title: 'Free Time',
          start: new Date(2021, 3, 0),
          end: new Date(2021, 3, 3),
        },
      ],
    };
  }

  render() {
    const app = this;
    const { eventsShowing } = this.state;
    return (
      <div id="app">
        <CalendarComponent
          app={app}
          events={eventsShowing}
        />
        <Sidebar />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
