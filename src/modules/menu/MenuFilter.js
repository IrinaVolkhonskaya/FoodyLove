import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => (
  <div>
    <h4>Поиск любимого блюда</h4>
    <input type="text" value={filter} onChange={onFilterChange} />
  </div>
);

export default MenuFilter;