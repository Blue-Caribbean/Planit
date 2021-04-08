import React from 'react';
import AddFriendsToGroup from './AddFriendsToGroup';
import AddEvent from './AddEvent';

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
    const { clicked, clickedIndex } = this.state;
    if (isGroupsSelected === false) {
      return (
        <div className="sidebarList">
          <ul>
            {friends.map((friend, index) => (
              <li key={friend} onClick={this.handleClick}>
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
          <div key={group} onClick={this.handleClick} name={index}>
            {group}
          </div>
        ))}
        <AddFriendsToGroup group={groups[clickedIndex]} clicked={clicked} friends={friends} />
        <AddEvent group={groups[clickedIndex]} clicked={clicked} />
      </div>
    );
  }
}

export default SidebarList;
