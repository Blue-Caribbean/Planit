import React from 'react';
import CalendarComponent from './Calendar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <CalendarComponent />
      </div>
    );
  }
}

export default App;
