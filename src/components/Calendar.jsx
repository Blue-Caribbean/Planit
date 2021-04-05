import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const CalendarComponent = (props) => (
  <Calendar
    localizer={localizer}
    events={[]}
    startAccessor="start"
    endAccessor="end"
    style={{ height: 500 }}
    view="week"
  />
);

export default CalendarComponent;
