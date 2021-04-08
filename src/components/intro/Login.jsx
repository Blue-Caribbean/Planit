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
    app.setState({ signup: true });
  }

  handleLogin(event) {
    event.preventDefault();
    const { app } = this.props;
    const { email } = this.state;
    const paramObj = { email };
    login(app, paramObj, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        app.setState({ user: result, loggedIn: true }, () => {
          console.log(app.state);
        });
      }
    });
  }

  render() {
    return (
      <div className="login-div">
        <label>
          Create an Account
          <form onSubmit={this.handleSubmit}>
            <div className="form-email">
              {'E-Mail: '}
              <input
                id="email"
                type="email"
                pattern="[^@\s]+@[^@\s]+"
                title="Invalid email address"
                placeholder="example@email.com"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-password">
              {'Password: '}
              <input
                id="password"
                type="password"
                placeholder="password"
                required
                onChange={this.handleChange}
              />
            </div>
            <div className="form-buttons-div">
              <button type="submit">Login</button>
              <button type="button" onClick={this.handleSignup}>
                Signup
              </button>
            </div>
          </form>
        </label>
      </div>
    );
  }
}

export default Login;
