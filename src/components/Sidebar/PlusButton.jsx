import React from 'react';
import Modal from 'react-modal';
//mport ReactDOM from 'react-dom';

Modal.setAppElement(document.getElementById('app'));

class PlusButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      searchBarTerm: '',
      newGroupName: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleGroupChange = this.handleGroupChange.bind(this);
  }

  openModal() {
    this.setState({
      modalIsOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
    });
  }

  handleGroupChange(event) {
    this.setState({
      newGroupName: event.target.value,
    });
  }

  handleListClick(event) {
    /*
      push the clicked item into your array.
    */

    const { newMembers } = this.state;

    let temp = newMembers;
    temp.push(event.target.innerHTML);

    this.setState({
      newMembers: temp,
      searchBarTerm: '',
      invalidBruh: false,
    });
  }

  handleChange(event) {
    /*
      We have to refactor all of this to look like our other search bar.
    */
    this.setState({
      searchBarTerm: event.target.value,
    });
  }

  // createGroup(event) {

  // }

  // addGroup() {

  // }

  render(props) {
    const { modalIsOpen } = this.state;
    const { friends, groups, isGroupsSelected } = this.props;

    if (isGroupsSelected === false) {
      return (
        <div id="modalDiv">
          <button onClick={this.openModal}>+</button>
          <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
            <h2>Add Friends</h2>
            <h3>Click a Friend to Add</h3>
            <input type="text" placeholder="Search Friends" onChange={this.handleChange} />
            <div className="searchBarList">
              <ul>
                {friends
                  .filter((friend) => friend.toLowerCase().includes(searchBarTerm.toLowerCase()))
                  .map((friend, index) => (
                    <li key={index} onClick={this.handleClick}>
                      {friend}
                    </li>
                  ))}
              </ul>
            </div>
            <button>Add Friend</button>
            <button onClick={this.closeModal}>Close</button>
          </Modal>
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
      <div id="modalDiv">
        <button onClick={this.openModal}>+</button>
        <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
          <h2>Search and select a group</h2>
          <input type="text" placeholder="Search Groups" />
          <div className="sidebarList">
            {groups.map((group, index) => (
              <div key={index} onClick={this.handleClick} name={group}>
                {group}
              </div>
            ))}
          </div>
          <button>Add Group</button>
          <h2>Create a New Group</h2>
          <div className="createGroup">
            <input type="text" placeholder="Group Name" />
            <button>Create</button>
          </div>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default PlusButton;
/*
  No idea why but the most recent PR broke this modal. I can't figure out how to fix it so I'm going to
  move on.

  When I first added modal.setAppElement it moved the modal to the very front of the screen.

  Now even when I try to set the z-index nothing happens.

  I don't really understand how there could be any changes with the calendar that are affecting my
  modal so it's probobly something on my end.
*/
