import React from 'react';
import { createUser } from '../../../functions/requests';

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
    };
    this.handleChange = this.handleChange.bind(this);
    this.goBack = this.goBack.bind(this);
    this.signup =this.signup.bind(this);
    this.signup=this.signup.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const key = event.target.id;
    const val = event.target.value;
    this.setState({ [key]: val});
  }

  goBack() {
    const { app } = this.props;
    app.setState({ signup: false });
  }

  signup(event) {
    event.preventDefault();
    const { app } = this.props;
    const {email, first, last} = this.state;
    const paramObj = {
      email,
      first,
      last,
      profilepic: 'https://www.pngkey.com/png/full/230-2301779_best-classified-apps-default-user-profile.png'
    }
    createUser( paramObj, (err) => {
      if (err) {
        console.error(err);
      } else {
        app.setState({signup: false});
      }
    })
  }


  render() {
    return (
      <label>
        Signup
        <form onSubmit={this.signup}>
          <input id='email' type='email' pattern='[^@\s]+@[^@\s]+' title='Invalid email address' onChange ={this.handleChange} placeholder='example@email.com' required />
          <input id='first' type='text' placeholder='First Name' onChange ={this.handleChange} required />
          <input id='last' type='text' placeholder="Last Name" onChange ={this.handleChange} required />
          <input id='password' type='password' onChange={this.handleChange} placeholder='Enter Password' required />
          <button type='submit' >Sign Up</button>
          <button type='button' onClick={this.goBack}>Go Back</button>
        </form>
      </label>
    );
  }
}

export default Signup;