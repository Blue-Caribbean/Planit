import React from 'react';
import SidebarList from './SidebarList';
import PlusButton from './PlusButton';
import requests from '../../../functions/requests';
class Sidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: ['Charlie', 'John', 'Ted', 'Joe', 'HoneyBooBoo'],
      groups: ['Galactus Maximus', 'Fathers who Fart', 'Fidget Spinners Anonomous', 'Wall-Mart'],
      groupsSelected: true,
      searchTerm: '',
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.updateGroups = this.updateGroups.bind(this);
    this.updateFriends = this.updateFriends.bind(this);
  }

  componentDidMount() {
    this.updateGroups();
    this.updateFriends();
  }

  updateGroups() {
    const { userID } = this.props;
    requests.getGroups(userID, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log('settingState');
        this.setState({
          groups: result,
        });
      }
    });
  }

  updateFriends() {
    const { userID } = this.props;
    requests.getFriends(userID, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        this.setState({
          friends: result,
        });
      }
    });
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
    const { groups, friends, groupsSelected, searchTerm } = this.state;
    let friendsColor = 'red';
    let groupsColor = 'white';
    console.log(groups);
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
        <PlusButton friends={friends} groups={groups} isGroupsSelected={groupsSelected} />
        <SidebarList friends={friends} groups={groups} isGroupsSelected={groupsSelected} />
      </div>
    );
  }
}

export default Sidebar;
