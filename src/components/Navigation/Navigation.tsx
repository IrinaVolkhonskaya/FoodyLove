import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

interface IItem {
  name: string,
  path: string,
}

interface INavigation {
  items: Array<IItem>,
}

const Navigation: React.FC<INavigation> = ({ items = [] } ) => (
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
