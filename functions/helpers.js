
const convertEvents = (array) => {
  const events = array.map((obj, index) => {
    const event = {
      id: index + 1,
      title: obj.event_name,
      start: new Date(obj.start_time),
      end: new Date(obj.end_time),
    };
    return event;
  })
  return events;
}

const convertFreeTime = (array) => {
  const freetime = array.map((obj, index) => {
    const freeBlock = {
      id: index + 1,
      title: 'Free Time',
      start: new Date(obj.start),
      end: new Date(obj.end_time),
    }
    return freeBlock;
  });
  return freetime;
}

module.exports = {
  convertEvents,
  convertFreeTime,
}
