import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

class CalendarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      canEdit: false,
      prevEvents: [],
    };
    this.updateAvailability = this.updateAvailability.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.showMyCalendarHandler = this.showMyCalendarHandler.bind(this);
  }

  onCancel() {
    const { app } = this.props;
    const { prevEvents } = this.state;
    this.setState(
      { canEdit: false },
      app.setState({
        eventsShowing: prevEvents,
      })
    );
  }

  onSubmit() {
    // post request /api/:user_id/updatefreetime paramsObj = [array of events]
    this.setState({ canEdit: false });
  }

  onChange({ start, end }) {
    const { app } = this.props;
    const { eventsShowing } = app.state;
    const tempArr = eventsShowing.slice();
    tempArr.push({ start, end, title: 'Free Time' });
    app.setState({
      eventsShowing: tempArr,
    });
  }

  showMyCalendarHandler() {
    const { getUserInfo } = this.props;
    getUserInfo();
  }

  updateAvailability() {
    const { app } = this.props;
    const { eventsShowing } = app.state;
    this.setState(
      {
        prevEvents: eventsShowing,
        canEdit: true,
      },
      app.setState({ eventsShowing: [] })
    );
  }

  render() {
    const { events } = this.props;
    const { canEdit } = this.state;
    return (
      <>
        <h1>Planit</h1>
        <h4 onClick={this.showMyCalendarHandler}>Show My Calendar</h4>
        <h4 onClick={this.updateAvailability}>Edit Availablity</h4>
        {canEdit ? (
          <>
            <button type="submit" onClick={this.onCancel}>
              Cancel
            </button>
            <button type="submit" onClick={this.onSubmit}>
              Submit
            </button>
          </>
        ) : null}
        <Calendar
          selectable={canEdit}
          localizer={localizer}
          defaultView={Views.WEEK}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '430px', width: '70%' }}
          onSelectEvent={(event) => alert(`${event.title}, start: ${event.start}`)}
          onSelectSlot={this.onChange}
        />
      </>
    );
  }
}

export default CalendarComponent;
