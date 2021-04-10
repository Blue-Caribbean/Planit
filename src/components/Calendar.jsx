import React from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import requests from '../../functions/requests';
import { convertFreeTime, convertEvents } from '../../functions/helpers';

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
    this.showFreeTime = this.showFreeTime.bind(this);
  }

  onCancel() {
    const { app } = this.props;
    const { prevEvents } = this.state;
    this.setState(
      { canEdit: false },
      app.setState({
        events: prevEvents,
      })
    );
  }

  onSubmit() {
    const { events, user, app } = this.props;
    const { prevEvents } = this.state;
    const self = this;
    requests.updateFreeTime(user.id, events, (err) => {
      if (err) {
        console.error(err);
      } else {
        app.setState({ events: prevEvents}, () => {
          self.setState({ canEdit: false })
        });
      }
    });
  }

  onChange({ start, end }) {
    const { app } = this.props;
    const { events } = app.state;
    const tempArr = events.slice();
    tempArr.push({id: events.length+1, start, end, title: 'Free Time' });
    app.setState({
      events: tempArr,
    }, () => {console.log(app.state)});
  }

  showMyCalendarHandler() {
    const { getUserInfo } = this.props;
    getUserInfo();
  }

  showFreeTime() {
    const { app } = this.props;
    const { events, user } = app.state;
    this.setState({prevEvents: events}, app.setState({events: convertFreeTime(user.freetime)}))
  }

  updateAvailability() {
    const { app } = this.props;
    const { events } = app.state;
    this.setState(
      {
        prevEvents: events,
        canEdit: true,
      },
      app.setState({ events: [] })
    );
  }

  render() {
    const { events } = this.props;
    const { canEdit } = this.state;
    let showingEvents = [];

    if(events.length > 0 && events[0].event_name) {
      for(let i = 0; i < events.length; i++) {
        const tempObj = {
          title: `${events[i].event_name} (${events[i].group_name})`,
          start: new Date(events[i].end_time),
          end: new Date(events[i].end_time)
        }
        showingEvents.push(tempObj);
      }
    } else {
      showingEvents = events.slice();
    }

    return (
      <>
        <div className="navbar">
          <div className="navbar-logo-div">
            <img src="globe.png" alt="planitlogo" className="logo" /> <h1>Planit</h1>
          </div>
          <div className="navbar-show-calendar">
            <h4 onClick={this.showFreeTime}>Show My Calendar</h4>
          </div>
          <div className="navbar-edit-calendar">
            <h4 onClick={this.updateAvailability}>Edit Availablity</h4>
          </div>

          <div className="navbar-edit-avail">
            {canEdit ? (
              <>
                <button type="submit" onClick={this.onCancel}>
                  Cancel
                </button>
                <button type="button" onClick={this.onSubmit}>
                  Submit
                </button>
              </>
            ) : null}
          </div>
        </div>
        <Calendar
          selectable={canEdit}
          localizer={localizer}
          defaultView={Views.WEEK}
          events={convertEvents(events)}
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
