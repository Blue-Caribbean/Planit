import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    return (
      <label>
        Login
        <form onSubmit={this.handleSubmit}>
          <input id="email" type="email" pattern="[^@\s]+@[^@\s]+" title="Invalid email address" />
          <input id="password" type="password" />
          <button type="submit">Login</button>
        </form>
      </label>
    );
  }
}

export default Login;
