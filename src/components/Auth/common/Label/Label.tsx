import React from 'react';
import classes from './Label.module.css';

type LabelType = {
  text: string,

}

const Label: React.FC<LabelType> = ({ text, children }) => (
  <label className={classes.label}>
    <span className={classes.text}>{text}</span>
    {children}
  </label>
);

export default Label;