import React from 'react';
import SidebarList from './SidebarList.jsx';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dummy: {
        friends: ['Charlie', 'John', 'Ted', 'Joe', 'HoneyBooBoo'],
        groups: ['Galactus Maximus', 'Fathers who Fart', 'Fidget Spinners Anonomous', 'Wall-Mart'],
      },
      groupsSelected: true,
      searchTerm: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(event) {
    const { groupsSelected } = this.state;
    if (groupsSelected === true) {
      this.setState({
        groupsSelected: false,
        searchTerm: '',
      });
    } else {
      this.setState({
        groupsSelected: true,
        searchTerm: '',
      });
    }
  }

  handleChange(event) {
    this.setState({
      searchTerm: event.target.value,
    });
  }

  render() {
    const { dummy, groupsSelected, searchTerm } = this.state;
    let friendsColor = 'red';
    let groupsColor = 'white';
    if (groupsSelected === true) {
      friendsColor = 'white';
      groupsColor = 'red';
    }
    return (
      <div id="sidebarContainer">
        <button type="button" onClick={this.handleToggle} style={{ backgroundColor: groupsColor }}>
          Groups
        </button>
        <button
          type="button"
          id="friendsButton"
          onClick={this.handleToggle}
          color={friendsColor}
          style={{ backgroundColor: friendsColor }}
        >
          Friends
        </button>
        <input type="text" value={searchTerm} onChange={this.handleChange} />
        <button type="button">+</button>
        <SidebarList
          friends={dummy.friends}
          groups={dummy.groups}
          isGroupsSelected={groupsSelected}
        />
      </div>
    );
  }
}

export default Sidebar;
