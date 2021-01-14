import React from 'react';
import classes from './Button.module.css';

// type ButtonType = {
//   label: string,
//   type: string,
//   onClick: () => void,
// }

const Button = ({ label = '', type = 'button', onClick = () => null } ) => (
  <button type={type} onClick={onClick} className={classes.button}>
    {label}
  </button>
);

export default Button;