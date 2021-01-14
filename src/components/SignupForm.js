import React, { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  email: '',
  phone: '',
  password: '',
};

export default class SignupForm extends Component {
  state = { ...INITIAL_STATE };

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
    this.setState({ ...INITIAL_STATE });
  }

  render() {
    const { name, email, phone, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>SingUP</h2>
        <label>
          Name
          <input
            type="text"
            placeholder="Введите Ваше имя"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <br />
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
          Phone number
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={this.handleChange}
            placeholder="phone"
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
        <button onClick={this.handleSubmit}>Sign Up</button>
      </form>
    );
  }
}
