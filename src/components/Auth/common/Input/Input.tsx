import React from 'react';
import classes from './Input.module.css';

type InputType = {
  type: string,
  name: string,
  value: string,
  onChange: (evt: React.FormEvent<HTMLInputElement>)=> void,
  placeholder: string,
}

const Input: React.FC<InputType> = ({
  type = 'text',
  name = '',
  value = '',
  onChange = () => null,
  placeholder = ''
}) => (
    <input
      className={classes.input}
      type={type}
      onChange={onChange}
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );

export default Input;
