import React from 'react';

const Navigation = ({ items = [] }) => (
  <ul>
    {items.map(item => (
      <li key={item}>
        {item}
        <a href="/"></a>
      </li>
    ))}
  </ul>
);

export default Navigation;
