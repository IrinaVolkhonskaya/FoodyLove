import React, { Component } from 'react';

const INITIAL_VALUE = {
  email: '',
  password: '',
};

export default class SignupForm extends Component {
  state = { ...INITIAL_VALUE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    console.log(this.state);

    this.reset();
  };

  reset() {
    this.setState({ ...INITIAL_VALUE });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>SingIN</h2>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="email"
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="password"
          />
        </label>
        <br />
        <button onClick={this.handleSubmit}>Sign In</button>
      </form>
    );
  }
}
