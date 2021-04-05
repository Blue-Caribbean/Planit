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
    };
  }

  render() {
    /*
      Sidebar component
      1. Friends button
      2. Groups button
      3. Plus button
      4. list
    */
    const { dummy } = this.state;
    return (
      <div id="sidebarContainer">
        <button type="button">Friends</button>
        <button type="button">Groups</button>
        <button type="button">+</button>
        <SidebarList friends={dummy.friends} groups={dummy.groups} />
      </div>
    );
  }
}

export default Sidebar;
