import React from 'react';

const FilterList = ({ menuJson }) => (
  <ul>
    <h2 id="title">Menu</h2>
    {menuJson.map(({ id, name, image, price }) => (
      <div className="menu" key={id}>
        <img
          className="menu-item"
          src={image}
          alt={name}
          width="250"
          height="200"
        />
        <div>{name}</div>
        <div>Price: {price} uah</div>
      </div>
    ))}
  </ul>
);

export default FilterList;
