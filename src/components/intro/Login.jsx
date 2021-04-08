import React from 'react';
import { login } from '../../../requests/requests';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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

  handleSignup() {
    const { app } = this.props;
    app.setState({signup: true});
  }

  handleLogin(event) {
    event.preventDefault()
    const { app } = this.props;
    const { email } = this.state;
    const paramObj = {email};
    login(app, paramObj, (err, result) => {
      if (err || !result ) {
        console.error('user not found')
      } else {
        debugger;
        app.setState({user: result, loggedIn: true }, ()=> {console.log(app.state)})
      }
    });
  }

  render() {
    return (
      <label>
        Create an Account
        <form onSubmit={this.handleLogin}>
          <input id='email' type='email' pattern='[^@\s]+@[^@\s]+' title='Invalid email address' placeholder="example@email.com" required onChange={this.handleChange} />
          <input id='password' type='password' placeholder='password' required onChange={this.handleChange} />
          <button type='submit'>Login</button>
          <button type='button' onClick={this.handleSignup} >Signup</button>
        </form>
      </label>
    );
  }
}

export default Login;
