import React from 'react';

class SidebarList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(event);
    this.setState({
      clicked: event.target.innerHTML,
    });
  }

  render(props) {
    const { friends, groups, isGroupsSelected } = this.props;

    if (isGroupsSelected === false) {
      return (
        <div className="sidebarList">
          <ul>
            {friends.map((friend, index) => (
              <li key={index} onClick={this.handleClick}>
                {friend}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    /*
      Add this button into the render method below if
      we want to schedule events directly from the sidebar

      In my opinion it would be much easier to just have a single
      button to schedule the event and have the group details change.
    */
    return (
      <div className="sidebarList">
        {groups.map((group, index) => (
          <div key={index} onClick={this.handleClick} name={group}>
            {group}
          </div>
        ))}
      </div>
    );
  }
}

export default SidebarList;
