// на хуках
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as operations from "../../redux/authOperations";
import Form from "./common/Form/Form";
import Input from "./common/Input/Input.tsx";
import Label from "./common/Label/Label";
import Button from "./common/Button/Button";

export default function SignUpForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const [email, setEmail] = useState("");
  const handleEmailChange = useCallback((evt) => {
    setEmail(evt.target.value);
  }, []);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(operations.signUp({ name, email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label text="Name">
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
      </Label>

      <Label text="Email">
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@mail.com"
        />
      </Label>

      <Label text="Password">
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </Label>

      <Button label="Sign Up" type="submit" />
    </Form>
  );
}


// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as operations from '../../redux/authOperations';

// const INITIAL_STATE = {
//   name: '',
//   email: '',
//   phone: '',
//   password: '',
// };

// class SignUpForm extends Component {
//   state = { ...INITIAL_STATE };

//   handleChange = e => {
//     this.setState({
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();

//     console.log(this.state);

//     this.reset();
//   };

//   reset() {
//     this.setState({ ...INITIAL_STATE });
//   }

//   render() {
//     const { name, email, phone, password } = this.state;
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h2>SingUP</h2>
//         <label>
//           Name
//           <input
//             type="text"
//             placeholder="Введите Ваше имя"
//             name="name"
//             value={name}
//             onChange={this.handleChange}
//           />
//         </label>
//         <br />
//         <label>
//           Email
//           <input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder="email"
//           />
//         </label>
//         <br />
//         <label>
//           Phone number
//           <input
//             type="tel"
//             name="phone"
//             value={phone}
//             onChange={this.handleChange}
//             placeholder="phone"
//           />
//         </label>
//         <br />
//         <label>
//           Password
//           <input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//             placeholder="password"
//           />
//         </label>
//         <br />
//         <button onClick={this.handleSubmit}>Sign Up</button>
//       </form>
//     );
//   }
// }

// const mapDispatch = {
//   onSubmit: operations.signUp
// };

// export default connect(
//   null,
//   mapDispatch
// )(SignUpForm);

