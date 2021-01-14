import axios from 'axios';

const ORDERS_URL = 'http://localhost:3000/orders';
//методы для запросов
const getAllOrdersItems = () =>
  axios.get(ORDERS_URL).then(response => response.data);

const getOrderItemById = id =>
  axios.get(`${ORDERS_URL}/${id}`).then(response => response.data);

const addOrderItem = item => axios.post(ORDERS_URL, item).then(response => response.data);

const deleteOrderItem = id =>
  axios.delete(`${ORDERS_URL}/${id}`).then(response => response.status === 200);



export { getAllOrdersItems, getOrderItemById, deleteOrderItem, addOrderItem };