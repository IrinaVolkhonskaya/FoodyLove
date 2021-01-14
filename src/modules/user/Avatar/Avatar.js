import React from 'react';

import avatar from '../../../components/AppHeader/assets/avatar.jpg';
import s from './Avatar.module.css';


const Avatar = ({ width = 100, height = 100 }) => (
  <img
    className={s.avatar}
    src={avatar}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
