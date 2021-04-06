import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

class EventsUpcoming extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEventsSorted: {},
      userRsvpsSorted: {},
      noticedRsvpClickEvent: false,
      rsvpResponse: null,
      eventsPanelOfNine: []
    };
    // this.sortEventsUpcomingByDate = this.sortEventsUpcomingByDate.bind(this);
    // this.manageRsvpClickEvent = this.manageRsvpClickEvent.bind(this);
    // this.leftNavigationalArrowClick = this.leftNavigationalArrowClick.bind(this);
    // this.rightNavigationalArrowClick = this.rightNavigationalArrowClick.bind(this);
  }

  // componentDidMount() {
  // }

  // sortEventsUpcomingByDate() {
  // sorting
  //  this.setState({
  //    userEventsSorted:
  //  })
  // sorting
  //  this.setState({
  //    userRsvpsSorted:
  //  })
  // }

  // manageRsvpClickEvent(event) {
  // console.log('RSVPclick event.target.value', event.target.value); // yes|no
  // axios
  //   .post(`\...`)
  //   .get(`\...`)
  //   .then((response) => {
  //     this.setState(() => {
  //
  //     })
  //   })
  //   .catch((error) => {
  //     console.log('Manage RSVP Click Event failed..., error);
  //   })
  // }

  // leftNavigationalArrowClick {
  // [][][] | [1][4][7]
  // [][][] < [2][5][8]
  // [][][] | [3][6][9]
  // }

  // rightNavigationalArrowClick {
  // [1][4][7] | [][][]
  // [2][5][8] > [][][]
  // [3][6][9] | [][][]
  // }

  render() {
    // const ______ = this.state;
    // const ______ = this.props;
    // _prop userEvents={userEvents} viaApp
    // maybe _prop userEventsAwaitingRsvp={userEventsAwaitingRsvp} viaApp
    // maybe _prop userEventsAccepted={userEventsAccepted} viaApp
    // maybe _prop userEventsDeclined={userEventsDeclined} viaApp
    // ? _prop userGroups={userGroups} viaApp
    // ? _prop groupEvents{groupEvents} viaApp

    // const rsvpNeededEventTiles = {
    // | date.day#  |  event.title       |
    // |            |  date.time         | [YES] [NO] // onClick
    // | date.month |  event.group       |
    // };

    // const usersUpcomingEventTiles = {
    // | date.day#  |  event.title
    // |            |  date.time
    // | date.month |  event.group
    // };

    return (
      <div className="EventsUpcoming">
        {/* { rsvpNeededEventTiles } */}
        {/* { usersUpcomingEventTiles } */}
      </div>
    )
  }

}

// EventsUpcoming.propTypes = {
// }

export default EventsUpcoming;
