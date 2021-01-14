import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

// type NavigationType = {
//   items: [],
//   name: string,
//   path: string,
// }

const Navigation = ({ items = [] } ) => (
  <ul className={s.nav}>
    {items.map(item => (
      <li key={item.name}>
        <NavLink to={item.path} className={s.link} activeClassName={s.activeLink}>
          {item.name}
        </NavLink>
      </li>
    ))}
  </ul>
);


export default Navigation;
