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
      canEdit: false
    };
    this.editAvailablity = this.editAvailablity.bind(this);
    this.updateAvailability = this.updateAvailability.bind(this);
  }

  updateAvailability() {
    this.setState({ eventsShowing: [], canEdit: true })
  }

  editAvailablity({ start, end }) {
    const { eventsShowing } = this.state;
    const tempArr = eventsShowing.slice();

    tempArr.push({start, end, title: 'Freetime' });

    this.setState({
      eventsShowing: tempArr,
    });
  }

  render() {
    const { eventsShowing, canEdit } = this.state;
    return (
      <div id="app">
        <CalendarComponent
          events={eventsShowing}
          editAvailablity={this.editAvailablity}
          canEdit={canEdit}
          updateAvailability={this.updateAvailability}
        />
        <Sidebar />
        <EventsUpcoming />
      </div>
    );
  }
}

export default App;
