import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

//методы для запросов

export const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

export const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

export const addMenuItem = async item => {
  const response = await axios.post('/menu', item);
  return response.data;
};

export const deleteMenuItem = async id => {
  const response = await axios.delete(`/menu/${id}`);
  return response.status === 200;
};

export const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

export const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};
