import React from 'react';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar.jsx';
import EventsUpcoming from './carousel/EventsUpcoming.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <CalendarComponent />
        <Sidebar />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
