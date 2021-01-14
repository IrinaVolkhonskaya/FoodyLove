import React from 'react';

const OrderItem = ({
  id,
  date,
  price,
  address,
  rating,
  onShowMoreInfo,
  onDelete,
}) => (
//   <div>
    <table>
      {/* <thead>
        <th>Date: </th>
        <th>Price: </th>
        <th>Address: </th>
        <th>Rating: </th>
      </thead> */}
      <tbody>
        <tr key={id}>
          <td>{date}</td>
          <td>{price}</td>
          <td>{address}</td>
          <td>{rating}</td>
          <td>
            <button type="button" onClick={onShowMoreInfo}>
              Детальнее
            </button>
          </td>
          <td>
            <button type="button" onClick={onDelete}>
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    </table>
//   </div>
);

export default OrderItem;
