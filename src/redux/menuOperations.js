import axios from 'axios';
import actions from './actionsMenu.js';

const fetchMenu = () => async dispatch => {
  dispatch(actions.fetchMenuRequest());

  try {
    const response = await axios.get(`http://localhost:3000/menu`);
    // console.log(`response`, response);
    dispatch(actions.fetchMenuSuccess(response.data));
  } catch (error) {
    dispatch(actions.fetchMenuError(error));
  }
};

const getAllCategories = () => async dispatch => {
  try {
    const response = await axios.get(`http://localhost:3000/categories`);// [{"id": 0, "name": "soup"},{"id": 1,"name": "dessert"},{ "id": 2,"name": "salad"},      {"id": 3,"name": "main course"}]
    // console.log(`response`, response);
    dispatch(actions.fetchCategories(response.data));
    
  } catch (error) {
    console.error(error);
  }
};

export default { fetchMenu, getAllCategories };
