import React from 'react';
import avatar from '../images/avatar.jpg';

const Avatar = ({ width = 100, height = 100 }) => (
  <img
    className="Avatar"
    src={avatar}
    alt="user avatar"
    width={width}
    height={height}
    
  />
);

export default Avatar;
