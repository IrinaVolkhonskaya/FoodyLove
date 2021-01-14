import React from 'react';
import OrderItem from './OrderItem';

const Orders = ({ items, onDelete, onShowMoreInfo }) => (
  <ol>
    {items.map(item => (
      <li key={item.id}>
        <OrderItem
          date={item.date}
          price={item.price}
          address={item.address}
          rating={item.rating}
          // onShowMoreInfo={() => onShowMoreInfo(item.id)}
          // onDelete={() => onDelete(item.id)}
        />
      </li>
    ))}
  </ol>
);

export default Orders;
