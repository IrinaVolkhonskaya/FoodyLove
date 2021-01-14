import React from 'react';

import avatar from '../../../components/AppHeader/assets/avatar.jpg';
import s from './Avatar.module.css';

interface IAvatarProps {
  width: number,
  height: number,
}

const Avatar: React.FC<IAvatarProps> = ({ width, height }) => (
  <img
    className={s.avatar}
    src={avatar}
    alt="user avatar"
    width={width}
    height={height}
  />
);

export default Avatar;
