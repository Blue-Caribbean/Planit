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
    this.setState({
      clicked: event.target.value,
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
    return (
      <div className="sidebarList">
        <ul>
          {groups.map((group, index) => (
            <li key={index} onClick={this.handleClick}>
              {group}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SidebarList;
