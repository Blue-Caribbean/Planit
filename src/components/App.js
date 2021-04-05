import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Sidebar from "./Sidebar/Sidebar.jsx";

const localizer = momentLocalizer(moment);

const App = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
      view="week"
    />
    <Sidebar />
  </div>
);

export default App;
