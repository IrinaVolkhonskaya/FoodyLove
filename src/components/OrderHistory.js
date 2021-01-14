import React, { Component } from 'react';
import orderJson from '../order-history.json';

export default class OrderHistory extends Component {
  state = {
    orderJson,
    date: 'Date',
    address: 'Delivery Address',
    price: 'Price',
    rating: 'Rating',
  };

  renderTableData() {
    return this.state.orderJson.map(order => {
      const { id, date, price, address, rating } = order; //destructuring
      return (
        <tr key={id}>
          <td>{date}</td>
          <td>{price}</td>
          <td>{address}</td>
          <td>{rating}</td>
        </tr>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 id="title">Order History</h2>
        <table id="orders" width="100%" cellSpacing="0" border="1">
          <thead>
            <tr>
              <th>{this.state.date}</th>
              <th>{this.state.price}</th>
              <th>{this.state.address}</th>
              <th>{this.state.rating}</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
