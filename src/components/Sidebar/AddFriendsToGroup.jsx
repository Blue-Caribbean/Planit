import React from 'react';
import Modal from 'react-modal';
//mport ReactDOM from 'react-dom';

Modal.setAppElement(document.getElementById('app'));

class AddFriendsToGroup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      searchBarTerm: '',
      newMembers: [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.pushToNewMembers = this.pushToNewMembers.bind(this);
    this.handleListClick = this.handleListClick.bind(this);
  }

  handleChange(event) {
    this.setState({
      searchBarTerm: event.target.value,
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

  pushToNewMembers(event) {
    /*
      1. Validate that there is only one friend in the list or that the friend selected is valid
      2. Push this into our newFriends list to be displayed within the modal if valid
    */

    const { searchBarTerm, newMembers } = this.state;
    const { friends } = this.props;
    if (searchBarTerm === '') {
      this.setState({
        invalidBruh: true,
      });
    }
    if (
      friends.filter((friend) => friend.toLowerCase().includes(searchBarTerm.toLowerCase()))
        .length === 1
    ) {
      console.log('Aliens');
      let temp = newMembers;
      temp.push(
        friends.filter((friend) => friend.toLowerCase().includes(searchBarTerm.toLowerCase()))[0]
      );
      this.setState({
        invalidBruh: false,
        searchBarTerm: '',
        newMembers: temp,
      });
    }
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

  render() {
    const { groups, clicked, friends } = this.props;
    const { modalIsOpen, searchBarTerm, newMembers } = this.state;

    if (clicked === '') {
      return <></>;
    }
    return (
      <div id="addFriendsToGroupContainer">
        <button onClick={this.openModal}>+</button>
        <Modal isOpen={modalIsOpen} onRequestClose={this.closeModal}>
          <h2>Add Friends to {clicked}</h2>
          <input type="text" placeholder="Search Friends" onChange={this.handleChange} />
          <button onClick={this.pushToNewMembers}>+</button>
          <div className="searchBarList">
            <ul>
              {friends
                .filter((friend) => friend.toLowerCase().includes(searchBarTerm.toLowerCase()))
                .map((friend, index) => (
                  <li key={index} onClick={this.handleListClick}>
                    {friend}
                  </li>
                ))}
            </ul>
          </div>
          <button>Add All</button>
          <div className="addedFriends">
            <ul>
              {newMembers.map((friend) => (
                <li key={friend}>{friend}</li>
              ))}
            </ul>
            <button onClick={this.closeModal}>Close</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default AddFriendsToGroup;
