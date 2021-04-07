import React from 'react';
import axios from 'axios';
// import PropTypes from 'prop-types';

class EventsUpcoming extends React.Component {
  // _prop userId={userId} viaApp
  constructor(props) {
    super(props);
    this.state = {
      eventsDataCollection: [ {}, {}, {} ],
      dummyEventsDataCollection: [
        {id: 1, user_id: 5, event_id: 1, pending: 0, accepted: 1, name: 'Bowling Fridays', start_time: '2021-04-16T12:00:00.000z-0700', end_time: '2021-04-16T16:45:00.000z-0700', group_id: 2, group_name: 'Bowling', private: 0},
        {id: 3, user_id: 5, event_id: 4, pending: 0, accepted: 1, name: 'Gaming Tuesdays', start_time: '2021-04-20T19:00:00.000z-0700', end_time: '2021-04-21T01:00:00.000z-0700', group_id: 4, group_name: 'Gaming', private: 0},
        {id: 5, user_id: 5, event_id: 12, pending: 1, accepted: 0, name: 'M&E Housewarming', start_time: '2021-04-19T14:00:00.000z-0700', end_time: '2021-04-19T17:30:00.000z-0700', group_id: 6, group_name: 'Family', private: 0},

        {id: 7, user_id: 5, event_id: 3, pending: 0, accepted: 1, name: 'EventE', start_time: '2021-05-03T09:00:00.000z-0700', end_time: '2021-05-03T11:45:00.000z-0700', group_id: 8, group_name: 'Group Name', private: 0},
        {id: 9, user_id: 5, event_id: 15, pending: 0, accepted: 1, name: 'EventF', start_time: '2021-05-07T20:00:00.000z-0700', end_time: '2021-05-07T21:30:00.000z-0700', group_id: 9, group_name: 'Group Name', private: 0},
        {id: 8, user_id: 5, event_id: 7, pending: 1, accepted: 0, name: 'EventG', start_time: '2021-05-09T13:00:00.000z-0700', end_time: '2021-05-09T15:30:00.000z-0700', group_id: 7, group_name: 'Group Name', private: 0},

        {id: 6, user_id: 5, event_id: 9, pending: 0, accepted: 1, name: 'EventD', start_time: '2021-04-30T09:00:00.000z-0700', end_time: '2021-04-30T09:45:00.000z-0800', group_id: 5, group_name: 'Group Name', private: 0},
        {id: 4, user_id: 5, event_id: 6, pending: 0, accepted: 1, name: 'EventH', start_time: '2021-05-15T08:00:00.000z-0700', end_time: '2021-05-15T11:00:00.000z-0700', group_id: 3, group_name: 'Group Name', private: 0},
        {id: 2, user_id: 5, event_id: 2, pending: 0, accepted: 1, name: 'EventI', start_time: '2021-05-15T13:00:00.000z-0700', end_time: '2021-04-15T15:50:00.000z-0700', group_id: 1, group_name: 'Group Name', private: 0},

        {id: 10, user_id: 5, event_id: 5, pending: 0, accepted: 1, name: 'EventK', start_time: '2021-05-21T13:00:00.000z-0700', end_time: '2021-05-21T16:50:00.000z-0700', group_id: 12, group_name: 'Group Name', private: 0},
        {id: 12, user_id: 5, event_id: 17, pending: 0, accepted: 1, name: 'EventJ', start_time: '2021-05-19T12:00:00.000z-0700', end_time: '2021-05-19T19:00:00.000z-0700', group_id: 10, group_name: 'Group Name', private: 0},
        {id: 12, user_id: 5, event_id: 31, pending: 0, accepted: 1, name: 'EventL', start_time: '2021-05-25T06:00:00.000z-0700', end_time: '2021-05-25T08:15:00.000z-0700', group_id: 11, group_name: 'Group Name', private: 0}
      ],
      // noticedRsvpClickEvent: false,
      // rsvpResponse: null,
      // eventsPanelOfNine: []
    };
    // this.getUsersToEventsEventGroupsData = this.getUsersToEventsEventGroupsData.bind(this);
    // this.sortEventsUpcomingCollectionByDate = this.sortEventsUpcomingCollectionByDate.bind(this);
    // this.manageRsvpClickEvent = this.manageRsvpClickEvent.bind(this);
    // this.leftNavigationalArrowClick = this.leftNavigationalArrowClick.bind(this);
    // this.rightNavigationalArrowClick = this.rightNavigationalArrowClick.bind(this);
  }

  componentDidMount() {
    // getUsersToEventsEventGroupsData();
    // sortEventsUpcomingCollectionByDate();
  }

  getUsersToEventsEventGroupsData() {
    // const {userId} = this.props;
    // let userId = 1;
    // axios
    //   .get(`/api/${userId}/userevents`)
    //   .then((response) => {
    //     this.setState(() => {
    //       return {
    //         eventsDataCollection: response.data
    //       }
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('Data retrieval failed: client EventsUpcoming GET (UsersToEvents table) & (Event table)', error);
    //   })
    /*
    ** app.get('/api/:userid/userevents', (req, res) => {
    **   //gets user events. this is a huge query very heavy.
    ** });
    */
  }

  /*
  sortEventsUpcomingCollectionByDate() {
    // {eventsDataCollection} = this.state;
    // {dummyEventsDataCollection} = this.state;

    // MDN Date.prototype.getTime()[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime]

    // Sorting an array of objects by number, string, date in JavaScript (DATE):[https://en.proft.me/2015/11/14/sorting-array-objects-number-string-date-javascrip/]
    // {dummyEventsDataCollection}.sort(function(a, b) {
    //   let dateA = new Date(a.start_time).getTime();
    //   let dateB = new Date(b.start_time).getTime();
    //   return dateA - dateB;
    // });

    // How to Sort Array of Objects by Date in JavaScript (DESCENDING):[https://onthecode.co.uk/how-to-sort-array-of-objects-by-date-in-javascript/]
    dummyEventsDataCollection.sort(function(a, b) {
      if ( new Date(a.start_time).getTime() > new Date(b.start_time).getTime() ) {
        return 1;
      }
      if ( new Date(a.start_time).getTime() < new Date(b.start_time).getTime() ) {
        return -1;
      }
      return 0;
    });

    // console.log('EventsUpcoming_sortByDate EventsUpcomingCollection dummy:', dummyEventsDataCollection);
    // console.log('EventsUpcoming_sortByDate EventsUpcomingCollection {dummy}:', {dummyEventsDataCollection});
    this.setState({
      dummyEventsDataCollection: dummyEventsDataCollection
    })
  }
  */

  // manageRsvpClickEvent(event) {
  // <<<<<< this is now a stretch goal
  // console.log('RSVPclick event.target.value', event.target.value); // yes|no
  // axios
  //   .post(`\...`) OR .patch(`\...`)
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
    // const ______ = this.props;
    // _prop userId={userId} viaApp
    const { userId } = this.props;
    //console.log('EventsUpcoming_render userId#:', userId);

    // const ______ = this.state;
    // _state eventsDataCollection
    // const { eventsDataCollection } = this.state;
    // console.log('EventsUpcoming_render eventsDataCollection:', eventsDataCollection);
    // _state dummyEventsDataCollection
    const { dummyEventsDataCollection } = this.state;
    console.log('EventsUpcoming_render dummyEventsDataCollection:', dummyEventsDataCollection);

    // <<<<<< userEventTilesAwaitingRsvp
    // | date.day#  |  event.title       |
    // |            |  date.time         | [YES] [NO] // onClick
    // | date.month |  event.group       |
    // <<<<<< userEventTilesUpcomingEvent
    // | date.day#  |  event.title
    // |            |  date.time
    // | date.month |  event.group

    return (
      <div className="EventsUpcoming">
        <div className="eventsNavigateLeft">
          <button
            type="submit"
            id="arrowLeft"
            onClick={this.leftNavigationalArrowClick}
          >
            {"[  < ]"}
            {/* <img src="./img/iconfinder_angle-left.png" alt="iconAngleLeft" id="iconAngleLeft" /> */}
          </button>
        </div>
        <div className="eventsTiles">
          <ul>
            {/* {userEventTiles} */}
            {dummyEventsDataCollection.map((event) => {
              return (
                <li key={event.event_id} id="eventTile">
                  <span id="tileDateBox">
                    {`${event.start_time.slice(8,10)}`}
                    <br></br>
                    {`${event.start_time.slice(5,7)}`}
                    <br></br>
                  </span>
                  <span id="tileInfoList">
                    {`${event.name}`}
                    <br></br>
                    {`${event.start_time.slice(11,16)}`}
                    <br></br>
                    {`${event.group_name}`}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="eventsNavigateRight">
          <button
            type="submit"
            id="arrowRight"
            onClick={this.rightNavigationalArrowClick}
          >
            {"[  > ]"}
            {/* <img src="./img/iconfinder_angle-right.png" alt="iconAngleRight" id="iconAngleRight" /> */}
          </button>
        </div>
      </div>
    );
  }

}

// EventsUpcoming.propTypes = {
//   userId: PropTypes.number.isRequired
// }

export default EventsUpcoming;
