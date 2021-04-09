const moment = require('moment');
moment().format();

const convertEvents = (array) => {
  const events = array.map((obj, index) => {
    const event = {
      id: index + 1,
      title: obj.event_name,
      start: new Date(obj.start_time),
      end: new Date(obj.end_time),
    };
    return event;
  });
  return events;
};

module.exports = {
  convertEvents,
};
