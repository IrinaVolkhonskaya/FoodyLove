import React from 'react';
import classes from './Button.module.css';

type ButtonType = {
  label: string,
  type: "button" | "reset" | "submit" | undefined ,
  onClick: () => void,
}

const Button: React.FC<ButtonType> = ({ label = '', type = 'button', onClick = () => null } ) => (
  <button type={type} onClick={onClick} className={classes.button}>
    {label}
  </button>
);

export default Button;