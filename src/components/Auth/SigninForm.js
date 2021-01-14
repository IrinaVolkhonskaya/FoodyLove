// на хуках
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import * as operations from "../../redux/authOperations";
import Form from "./common/Form/Form";
import Input from "./common/Input/Input";
import Label from "./common/Label/Label";
import Button from "./common/Button/Button";

// interface IInput {
//   type: string,
//   name: string,
//   value: string,
//   onChange?: () => void | null,
//   placeholder: string,
// }

// interface IForm {
//   onSubmit: () => void
// } 


export default function SignInForm() {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const handleEmailChange = useCallback((evt) => {
   
    setEmail(evt.target.value);
  }, []);

  const [password, setPassword] = useState("");
  const handlePasswordChange = (evt) => {
    setPassword(evt.target.value);
  };

  const handleSubmit = (evt)  => {
    evt.preventDefault();
    dispatch(operations.signIn({ email, password }));
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <Button label="Sign in" type="submit" />
    </Form>
  );
}

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import * as operations from '../../redux/authOperations';
// import Form from './common/Form/Form';
// import Input from './common/Input/Input';
// import Label from './common/Label/Label';
// import Button from './common/Button/Button';

// const INITIAL_STATE = { email: '', password: '' };

// class SignInForm extends Component {
//   state = { ...INITIAL_STATE };

//   handleChange = ({ target: { name, value } }) => {
//     this.setState({
//       [name]: value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();

//     this.props.onSubmit({ ...this.state });

//     this.setState({ ...INITIAL_STATE });
//   };

//   render() {
//     const { email, password } = this.state;

//     return (
//       <Form onSubmit={this.handleSubmit}>
//         <Label text="Email">
//           <Input
//             type="email"
//             name="email"
//             value={email}
//             onChange={this.handleChange}
//             placeholder="example@mail.com"
//           />
//         </Label>

//         <Label text="Password">
//           <Input
//             type="password"
//             name="password"
//             value={password}
//             onChange={this.handleChange}
//           />
//         </Label>

//         <Button label="Sign in" type="submit" />
//       </Form>
//     );
//   }
// }

// const mapDispatch = {
//   onSubmit: operations.signIn
// };

// export default connect(
//   null,
//   mapDispatch
// )(SignInForm);

//на hooks
