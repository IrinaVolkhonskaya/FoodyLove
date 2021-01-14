import React, { Component } from 'react';
import Orders from './Orders';
import Loader from '../../../components/Loader/Loader';
// import * as API from '../../../orders-api';
import * as API from '../../.././services/orders-api';

export default class OrdersPage extends Component {
  state = {
    orders: [],
    isLoading: false,
  };

  componentDidMount() {
    this.setState({ isLoading: true });

    API.getAllOrdersItems().then(orders => {
      this.setState({ orders, isLoading: false });
    });
  }

  handleDeleteItem = id => {
    API.deleteOrderItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        orders: state.orders.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getOrderItemById(id).then(item => {
      //   console.log(item);
      alert(
        `Ваш заказ на сумму ${item.price}UAH был ${item.date} доставлен по адресу ${item.address}`,
      );
    });
  };

  handleAddOrderItem = () => {
    this.setState({ isLoading: true });

    const item = {
      date: `${new Date().toLocaleDateString()}`,
      price: Math.floor(Math.random() * 10000) / 100,
      address: 'NEW Delivery Address',
      rating: Math.floor(Math.random() * (10 - 1 + 1)) + 1, // генерация случайных чисел от 1 до 10
    };

    API.addOrderItem(item).then(newOrder => {
      this.setState(state => ({
        orders: [...state.orders, newOrder], 
        isLoading: false,
      }));
    });
  };

  render() {
    const { orders, isLoading } = this.state;

    return (
      <div>
        <button type="button" onClick={this.handleAddOrderItem}>
          Добавить новый заказ
        </button>
        <h4>Orders History</h4>
        {isLoading ? (
          <Loader />
        ) : (
          <Orders
            items={orders}
            onDelete={this.handleDeleteItem}
            onShowMoreInfo={this.handleShowMoreInfo}
          />
        )}
      </div>
    );
  }
}
