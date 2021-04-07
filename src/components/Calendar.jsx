import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

class CalendarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      canEdit: false,
    };
    this.updateAvailability = this.updateAvailability.bind(this);
    this.editAvailability = this.editAvailability.bind(this);
  }

  updateAvailability() {
    const { app } = this.props;
    const self = this;
    app.setState({ eventsShowing: [] }, () => {
      self.setState({
        canEdit: true,
      });
    });
  }

  editAvailability({ start, end }) {
    const { app } = this.props;
    const { eventsShowing } = app.state;
    const tempArr = eventsShowing.slice();
    tempArr.push({ start, end, title: 'Free Time' });
    app.setState({
      eventsShowing: tempArr,
    });
  }
  // onClick event that clears current events array from state then makes calendar selectable
  // allows user to slect free times
  // saves free times to state
  // on submit makes call to update freetimes

  render() {
    const { events } = this.props;
    const { canEdit } = this.state;
    return (
      <>
        <h1>Planit</h1>
        <h4>Show My Calendar</h4>
        <h4 onClick={this.updateAvailability}>Edit Availablity</h4>
        {canEdit ? (
          <>
            <button type="submit">Cancel</button>
            <button type="submit">Submit</button>
          </>
        ) : null}
        <Calendar
          selectable={canEdit}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectEvent={(event) => alert(event.title)}
          onSelectSlot={this.editAvailability}
        />
      </>
    );
  }
}

export default CalendarComponent;
