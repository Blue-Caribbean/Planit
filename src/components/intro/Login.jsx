import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
  }

  handleChange(event) {
    const key = event.target.id;
    const val = event.target.value;
    this.setState({ [key]: val });
  }


  handleSubmit(event) {
    event.preventDefault();
    const { app } = this.props;
    app.setState({ loggedIn: true });
    //GET request  /api/auth paramObj = {email: emailAddress}
  }

  signup() {
    const { app } = this.props;
    app.setState({signup: true});
  }

  render() {
    return (
      <label>
        Create an Account
        <form onSubmit={this.handleSubmit}>
          <input id='email' type='email' pattern='[^@\s]+@[^@\s]+' title='Invalid email address' placeholder="example@email.com" required />
          <input id='password' type='password' placeholder='password' required />
          <button type='submit'>Login</button>
          <button type='button' onClick={this.signup}>Signup</button>
        </form>
      </label>
    );
  }
}

export default Login;
