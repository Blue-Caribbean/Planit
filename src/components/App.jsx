import React from 'react';
import CalendarComponent from './Calendar';
import Sidebar from './Sidebar/Sidebar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <CalendarComponent />
        <Sidebar />
      </div>
    );
  }
}

export default App;
