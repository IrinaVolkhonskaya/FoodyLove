import { normalize } from 'normalizr';
import * as schemas from './schemas';

import denormalizedMenu from '../menu.json';
console.log(`denormalizedMenu: `, denormalizedMenu);
const normalizedMenu = normalize(denormalizedMenu, [schemas.MenuSchema]);
console.log(`normalizedMenu: `, normalizedMenu);

export const actionTypes = {
  //MENU
  FETCH_MENU_REQUEST: 'FETCH_MENU_REQUEST',
  FETCH_MENU_SUCCESS: 'FETCH_MENU_SUCCESS',
  FETCH_MENU_ERROR: 'FETCH_MENU_ERROR',
  // SELECT_CATEGORY: 'SELECT_CATEGORY',

  //CART
  ADD_TO_CART: 'ADD_TO_CART',
  DELETE_TO_CART: 'DELETE_TO_CART',
};

const fetchMenuRequest = () => ({
  type: actionTypes.FETCH_MENU_REQUEST,
});

// const fetchMenuRequest = menu => {
//   const normalizedMenu = normalize(denormalizedMenu, [schemas.MenuSchema]);
//   console.log(`normalizedMenu: `, normalizedMenu)
//   return {
//     type: actionTypes.FETCH_MENU_REQUEST,
//     payload: {
//       ids: {
//         menu: Object.keys(normalizedMenu.entities.menu),
//       },
//       entities: normalizedMenu.entities,
//     },
//   };
// };

const fetchMenuSuccess = menu => ({
  type: actionTypes.FETCH_MENU_SUCCESS,
  payload: menu,
});

const fetchMenuError = error => ({
  type: actionTypes.FETCH_MENU_ERROR,
  payload: error,
});

// const selectCategory = filter => ({
//   type: actionTypes.SELECT_CATEGORY,
//   payload: filter,
// });

export default { fetchMenuRequest, fetchMenuSuccess, fetchMenuError, 
  // selectCategory 
};

//

//   export const selectCategory = (id) => ({
//     type: actionTypes.SELECT_CATEGORY,
//     payload: id,
//   });
