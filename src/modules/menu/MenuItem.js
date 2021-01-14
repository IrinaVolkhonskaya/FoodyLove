import React from 'react';

const MenuItem = ({ image, name, price, onShowMoreInfo, onDelete }) => (
  <div>
    <img className="menuItem" src={image} alt={name} width={320} height={240} />
    <p>{name}</p>
    <p>Price: {price}uah</p>
    <div>
      <button type="button" onClick={onShowMoreInfo}>
        Больше инфо
      </button>
      <button type="button" onClick={onDelete}>
        Удалить
      </button>
    </div>
  </div>
);

export default MenuItem;
