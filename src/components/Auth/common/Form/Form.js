import React from 'react';
import classes from './Form.module.css';

// type Props={
//   onSubmit: (event: React.FormEvent<HTMLInputElement>)=> void,
//   children?: JSX.Element,
// }

const Form = ({ onSubmit = () => null, children }) => (
  <form className={classes.form} onSubmit={onSubmit}>
    {children}
  </form>
);

export default Form;