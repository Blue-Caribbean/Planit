import React from 'react';
import CalendarComponent from './Calendar'
import EventsUpcoming from './carousel/EventsUpcoming.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="app">
        <CalendarComponent />
        <EventsUpcoming />
      </div>
    );
  }

}

export default App;
