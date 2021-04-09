import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
  }

  /*
    OnClick function: Sends the clicked group's userID to the calendar modal

    1. We could set the clicked group in app's state
    2. We could also just set the group in lerroy's state.
  */
  render() {
    const { clicked } = this.props;
    if (clicked === '') {
      return <div className="addEventContainer" />;
    }
    return (
      <div className="addEventContainer">
        <button>Add Event for {clicked}</button>
      </div>
    );
  }
}

export default AddEvent;
