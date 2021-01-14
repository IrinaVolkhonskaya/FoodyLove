import React from 'react';

const MenuFilter = ({ filter, onFilterChange }) => (
  <div>
    <div>Search</div>
    <input type="text" value={filter} onChange={onFilterChange} />
  </div>
);

export default MenuFilter;
