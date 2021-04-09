import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import moment from 'moment';
import getUserEvents from '../../../functions/requests.js';

class EventsUpcoming extends React.Component {
  // _prop userId={userId} viaApp
  constructor(props) {
    super(props);
    const { events } = props;
    this.state = {
      eventsDataCollection: events,
      // eventsDataCollection: [ {}, {}, {} ],
      // eventsDataCollection: [
      //   {
      //     id: 1,
      //     user_id: 5,
      //     event_id: 1,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Bowling Fridays',
      //     start_time: '2021-04-16T12:00:00.000-7:00',
      //     end_time: '2021-04-16T16:45:00.000-7:00',
      //     group_id: 2,
      //     group_name: 'Bowling',
      //     private: 0,
      //   },
      //   {
      //     id: 3,
      //     user_id: 5,
      //     event_id: 4,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Gaming Tuesdays',
      //     start_time: '2021-04-20T19:00:00.000-7:00',
      //     end_time: '2021-04-21T01:00:00.000-7:00',
      //     group_id: 4,
      //     group_name: 'Gaming',
      //     private: 0,
      //   },
      //   {
      //     id: 5,
      //     user_id: 5,
      //     event_id: 12,
      //     pending: 1,
      //     accepted: 0,
      //     name: 'M&E Housewarming',
      //     start_time: '2021-04-19T14:00:00.000-7:00',
      //     end_time: '2021-04-19T17:30:00.000-7:00',
      //     group_id: 6,
      //     group_name: 'Family',
      //     private: 0,
      //   },

      //   {
      //     id: 7,
      //     user_id: 5,
      //     event_id: 3,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Hawaiian Party',
      //     start_time: '2021-05-03T21:00:00.000-7:00',
      //     end_time: '2021-05-03T22:45:00.000-7:00',
      //     group_id: 8,
      //     group_name: 'College Friends',
      //     private: 0,
      //   },
      //   {
      //     id: 9,
      //     user_id: 5,
      //     event_id: 15,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Drinks with Claire',
      //     start_time: '2021-05-07T20:00:00.000-7:00',
      //     end_time: '2021-05-07T21:30:00.000-7:00',
      //     group_id: 9,
      //     group_name: 'College Friends',
      //     private: 0,
      //   },
      //   {
      //     id: 8,
      //     user_id: 5,
      //     event_id: 7,
      //     pending: 1,
      //     accepted: 0,
      //     name: 'Pickup Soccer',
      //     start_time: '2021-05-09T13:00:00.000-7:00',
      //     end_time: '2021-05-09T15:30:00.000-7:00',
      //     group_id: 7,
      //     group_name: 'Soccer',
      //     private: 0,
      //   },

      //   {
      //     id: 6,
      //     user_id: 5,
      //     event_id: 9,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Gaming Fridays',
      //     start_time: '2021-04-30T09:00:00.000-7:00',
      //     end_time: '2021-04-30T09:45:00.000-7:00',
      //     group_id: 5,
      //     group_name: 'Gaming',
      //     private: 0,
      //   },
      //   {
      //     id: 4,
      //     user_id: 5,
      //     event_id: 6,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Golf with Dad',
      //     start_time: '2021-05-15T08:00:00.000-7:00',
      //     end_time: '2021-05-15T11:00:00.000-7:00',
      //     group_id: 3,
      //     group_name: 'Family',
      //     private: 0,
      //   },
      //   {
      //     id: 2,
      //     user_id: 5,
      //     event_id: 2,
      //     pending: 0,
      //     accepted: 1,
      //     name: 'Board Games',
      //     start_time: '2021-05-15T13:00:00.000-7:00',
      //     end_time: '2021-04-15T15:50:00.000-7:00',
      //     group_id: 1,
      //     group_name: 'Gaming',
      //     private: 0,
      //   },

      // {id: 10, user_id: 5, event_id: 5, pending: 0, accepted: 1, name: 'EventJ', start_time: '2021-05-21T13:00:00.000-7:00', end_time: '2021-05-21T16:50:00.000-7:00', group_id: 12, group_name: 'Group Name', private: 0},
      // {id: 12, user_id: 5, event_id: 17, pending: 0, accepted: 1, name: 'EventI', start_time: '2021-05-19T12:00:00.000-7:00', end_time: '2021-05-19T19:00:00.000-7:00', group_id: 10, group_name: 'Group Name', private: 0},
      // {id: 11, user_id: 5, event_id: 31, pending: 0, accepted: 1, name: 'EventK', start_time: '2021-05-25T06:00:00.000-7:00', end_time: '2021-05-25T08:15:00.000-7:00', group_id: 11, group_name: 'Group Name', private: 0}
      // ],
      // noticedRsvpClickEvent: false,
      // rsvpResponse: null,
      eventsOfNineOnPanelNumber: 0,
    };

    // this.getUsersToEventsEventGroupsData = this.getUsersToEventsEventGroupsData.bind(this);
    this.sortEventsUpcomingCollectionByDate = this.sortEventsUpcomingCollectionByDate.bind(this);
    // this.manageRsvpClickEvent = this.manageRsvpClickEvent.bind(this);
    this.leftNavigationalCaretClick = this.leftNavigationalCaretClick.bind(this);
    this.rightNavigationalCaretClick = this.rightNavigationalCaretClick.bind(this);
  }

  componentDidMount() {
    this.sortEventsUpcomingCollectionByDate();
  }

  // getUsersToEventsEventGroupsData() {
  //   const { userId } = this.props;
  //   axios
  //     .get(`/api/${userId}/userevents`)
  //     .then((response) => {
  //       this.setState(() => {
  //         return {
  //           eventsDataCollection: response.data
  //         }
  //       })
  //     })
  //     .catch((error) => {
  //       console.log('Data retrieval failed: client EventsUpcoming GET (UsersToEvents table) & (Event table)', error);
  //     })
  //   /*
  //   ** app.get('/api/:userid/userevents', (req, res) => {
  //   **   //gets user events. this is a huge query very heavy.
  //   ** });
  //   */
  // }

  sortEventsUpcomingCollectionByDate() {
    const { eventsDataCollection } = this.state;
    // Ecma Standard international standard ISO/IEC:[https://262.ecma-international.org/5.1/#sec-15.9.1.15]
    const organizeDatesSoonestToLatest = function (a, b) {
      if (a.start_time > b.start_time) {
        return 1;
      }
      if (a.start_time < b.start_time) {
        return -1;
      }
      return 0;
    };
    eventsDataCollection.sort(organizeDatesSoonestToLatest);
    this.setState({
      eventsDataCollection: eventsDataCollection,
    });
  }

  // manageRsvpClickEvent(event) {
  // <<<<<< this patch/post functionality is a stretch goal
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

  leftNavigationalCaretClick(event) {
    // <<<<<< I want to learn to do this with CSS instead
    // <<<<<< currently only set up to handle 2 panels
    // [][][] | [1][4][7]
    // [][][] < [2][5][8]
    // [][][] | [3][6][9]
    const { eventsOfNineOnPanelNumber } = this.state;
    if (eventsOfNineOnPanelNumber === 0) {
      this.setState({
        eventsOfNineOnPanelNumber: 1,
      });
    }
    if (eventsOfNineOnPanelNumber === 1) {
      this.setState({
        eventsOfNineOnPanelNumber: 0,
      });
    }
  }

  rightNavigationalCaretClick(event) {
    // <<<<<< I want to learn to do this with CSS instead
    // <<<<<< currently only set up to handle 2 panels
    // [1][4][7] | [][][]
    // [2][5][8] > [][][]
    // [3][6][9] | [][][]
    const { eventsOfNineOnPanelNumber } = this.state;
    if (eventsOfNineOnPanelNumber === 0) {
      this.setState({
        eventsOfNineOnPanelNumber: 1,
      });
    }
    if (eventsOfNineOnPanelNumber === 1) {
      this.setState({
        eventsOfNineOnPanelNumber: 0,
      });
    }
  }

  render() {
    // _prop userId={userId} viaApp
    const { userId } = this.props;
    // console.log('EventsUpcoming_render userId#:', userId);
    // _state eventsDataCollection
    const { eventsDataCollection } = this.state;
    // console.log('EventsUpcoming_render eventsDataCollection:', eventsDataCollection);

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
        <div id="eventsNavigateLeft">
          <button type="submit" id="caretLeft" onClick={this.leftNavigationalCaretClick}>
            {' < '}
            {/* <img src="./img/iconfinder_caret-left.png" alt="iconCaretLeft" id="iconCaretLeft" /> */}
          </button>
        </div>
        <div className="eventsTiles">
          {/* <ul> */}
          {/* {userEventTilesAwaitingRsvp} */}
          {eventsDataCollection.map((event) => {
            if (event.pending === 1) {
              return (
                <div key={event.event_id} id="eventTile">
                  {/* <li key={event.event_id} id="eventTile"> */}
                  <span id="tileDateBox">
                    {`${moment(event.start_time).format('MMM')} ${event.start_time.slice(8, 10)}`}
                    {/* <br></br>
                      {`${moment(event.start_time).format('MMM')}`} */}
                    {/* <br></br> */}
                  </span>
                  <span id="tileInfoList">
                    {`Event: ${event.event_name}`}
                    {/* <br></br> */}
                    {`${moment(event.start_time).format('hh:MM a')}`}
                    {/* {`${moment(event.start_time.slice(11, 16), 'HH:mm').format('h:mm a')}`} */}
                    {/* <br></br> */}
                    {`Group: ${event.group_name}`}
                    {/* <br></br> */}
                  </span>
                  <br />
                  <span id="tileRsvpButtonYes">
                    <button type="submit" id="tileRsvpYes" onClick={this.manageRsvpClickEvent}>
                      <div>{'RSVP'}</div>
                      <div>{'YES'}</div>
                    </button>
                  </span>
                  <span id="tileRsvpButtonNo">
                    <button type="submit" id="tileRsvpNo" onClick={this.manageRsvpClickEvent}>
                      <div>{'RSVP'}</div>
                      <div>{'NO'}</div>
                    </button>
                  </span>
                  {/* </li> */}
                </div>
              );
            }
          })}
          {/* {userEventTilesUpcomingEvent} */}
          {eventsDataCollection.map((event) => {
            if (event.accepted === 1) {
              return (
                <li key={event.event_id} id="eventTile">
                  <span id="tileDateBox">
                    {`${event.start_time.slice(8, 10)}`}
                    <br></br>
                    {`${moment.monthsShort(Number(event.start_time.slice(5, 7)) - 1)}`}
                    <br></br>
                  </span>
                  <span id="tileInfoList">
                    {`${event.name}`}
                    <br></br>
                    {`${moment(event.start_time).format('hh:MM a')}`}
                    <br></br>
                    {`${event.group_name}`}
                  </span>
                </li>
              );
            }
          })}
          {/* </ul> */}
        </div>
        <div id="eventsNavigateRight">
          <button type="submit" id="caretRight" onClick={this.rightNavigationalCaretClick}>
            {' > '}
            {/* <img src="./img/iconfinder_caret-right.png" alt="iconCaretRight" id="iconCaretRight" /> */}
          </button>
        </div>
      </div>
    );
  }
}

EventsUpcoming.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default EventsUpcoming;
