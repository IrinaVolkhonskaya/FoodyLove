import React from 'react';
import {Link} from 'react-router-dom';
import routes from '../../configs/routes';

import MenuItem from './MenuItem';

const MenuGrid = ({ items, onDelete, onShowMoreInfo }) => (
  <ul>
    {items.map(item => (
      <li key={item.id}>
        <Link to={`${routes.MENU}/${item.id}`}>
        <MenuItem
          name={item.name}
          price={item.price}
          image={item.image}
          onShowMoreInfo={() => onShowMoreInfo(item.id)}
          onDelete={() => onDelete(item.id)}
        />
        </Link>
      </li>
    ))}
  </ul>
);

export default MenuGrid;
