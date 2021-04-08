import React from 'react';

class AddEvent extends React.Component {
  constructor(props) {
    super(props);
  }

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
