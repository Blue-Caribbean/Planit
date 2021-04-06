import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => {
  const { events, editAvailablity } = props;

  // onClick event that clears current events array from state then makes calendar selectable
    // allows user to slect free times
    // saves free times to state
    // on submit makes call to update freetimes

  return (
<<<<<<< HEAD
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
=======
  <>
  <h1>Planit</h1>
  <h4>Show My Calendar</h4>
  <h4 onC>Edit Availablity</h4>
    <Calendar
      selectable={true}
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      onSelectEvent={event => alert(event.title)}
      onSelectSlot={editAvailablity}
    />
>>>>>>> 6b4c94b984f06436688395e1c93474cc3b19ff22
    </>
  );
};

export default CalendarComponent;
