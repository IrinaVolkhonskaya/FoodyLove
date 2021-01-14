import { normalize } from 'normalizr';
import * as schemas from './schemas';
import { createAction } from '@reduxjs/toolkit';

import denormalizedMenu from '../menu.json';
// console.log(`denormalizedMenu: `, denormalizedMenu);

const fetchMenuRequest = createAction('FETCH_MENU_REQUEST');
const fetchMenuError = createAction('FETCH_MENU_ERROR');
const changeFilter = createAction('CHANGE_FILTER');
const fetchCategories = createAction('FETCH_CATEGORIES');
const selectCategory = createAction('SELECT_CATEGORY');
const fetchMenuSuccess = createAction(
  'FETCH_MENU_SUCCESS',
  (ids, entities, menu) => {
    const normalizedMenu = normalize(denormalizedMenu, [schemas.MenuSchema]);
    console.log(`normalizedMenu: `, normalizedMenu);

    return {
      payload: {
        ids: {
          menu: Object.keys(normalizedMenu.entities.menu),
        },
        entities: normalizedMenu.entities,
      },
    };
  },
);

// const getMenuItemById = createAction('GET_MENU_ITEM_BY_ID');



//old version

export const actionTypes = {
  //MENU
  FETCH_MENU_REQUEST: 'FETCH_MENU_REQUEST',
  FETCH_MENU_SUCCESS: 'FETCH_MENU_SUCCESS',
  FETCH_MENU_ERROR: 'FETCH_MENU_ERROR',
  FETCH_CATEGORIES: 'FETCH_CATEGORIES',
  SELECT_CATEGORY: 'SELECT_CATEGORY',
  CHANGE_FILTER: 'CHANGE_FILTER',
  GET_MENU_ITEM_BY_ID: 'GET_MENU_ITEM_BY_ID',
};

// const fetchMenuRequest = menu => ({
//   type: actionTypes.FETCH_MENU_REQUEST,
//   payload: menu,
// });

// const fetchMenuSuccess = () => {
//   const normalizedMenu = normalize(denormalizedMenu, [schemas.MenuSchema]);
//   console.log(`normalizedMenu: `, normalizedMenu);
//   return {
//     type: actionTypes.FETCH_MENU_SUCCESS,
//     payload: {
//       ids: {
//         menu: Object.keys(normalizedMenu.entities.menu),
//       },
//       entities: normalizedMenu.entities,
//     },
//   };
// };

// const fetchMenuError = error => ({
//   type: actionTypes.FETCH_MENU_ERROR,
//   payload: error,
// });

// const changeFilter = filter => ({
//   type: actionTypes.CHANGE_FILTER,
//   payload: filter,
// });

// const fetchCategories = categories => ({
//   type: actionTypes.FETCH_CATEGORIES,
//   payload: categories,
// });

// const selectCategory = name => ({
//   type: actionTypes.SELECT_CATEGORY,
//   payload: name,
// });



// const getMenuItemById = id => ({
//   type: actionTypes.GET_MENU_ITEM_BY_ID,
//   payload: id,
// })

export default {
  fetchMenuRequest,
  fetchMenuSuccess,
  fetchMenuError,
  selectCategory,
  changeFilter,
  fetchCategories,
  // getMenuItemById
};
