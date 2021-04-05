import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);


const CalendarComponent = (props) => {
  const { events } = props;
  return (
  <>
  <h1>Planit</h1>
  <h4>Show My Calendar</h4>
  <h4>Edit Availablity</h4>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
    </>
  );
}


export default CalendarComponent;