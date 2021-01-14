import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { actionTypes } from '../actionsMenu';
import actions from '../actionsMenu.js';

const menuItemsReducer = createReducer([], {
  [actions.fetchMenuSuccess]: (state, { payload }) => payload.ids.menu,
});

const loadingReducer = createReducer(false, {
  [actions.fetchMenuRequest]: (state, { payload }) => true,
  [actions.fetchMenuSuccess]: (state, { payload }) => false,
  [actions.fetchMenuError]: (state, { payload }) => false,
});

const errorReducer = createReducer(null, {
  [actions.fetchMenuRequest]: (state, { payload }) => null,
  [actions.fetchMenuError]: (state, { payload }) => payload,
});

const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

// function menuItemsReducer(state = [], { type, payload }) {
//   switch (type) {
//     case actionTypes.FETCH_MENU_SUCCESS:
//       return payload.ids.menu;
//     default:
//       return state;
//   }
// }

// function loadingReducer(state = false, { type }) {
//   switch (type) {
//     case actionTypes.FETCH_MENU_REQUEST:
//       return true;
//     case actionTypes.FETCH_MENU_SUCCESS:
//     case actionTypes.FETCH_MENU_ERROR:
//       return false;

//     default:
//       return state;
//   }
// }

// function errorReducer(state = null, { type, payload }) {
//   switch (type) {
//     case actionTypes.FETCH_MENU_REQUEST:
//       return null;

//     case actionTypes.FETCH_MENU_ERROR:
//       return payload;

//     default:
//       return state;
//   }
// }

// function filterReducer(state = '', { type, payload }) {
//   switch (type) {
//     case actionTypes.CHANGE_FILTER:
//       return payload;
//     default:
//       return state;
//   }
// }

//редьюсер одного артикула
// function menuItemReducer(state = '', { type, payload }) {
//   switch (type) {
//     case actionTypes.GET_MENU_ITEM_BY_ID:
//       return payload.ids.menu.id;
//     default:
//       return state;
//   }
// }

export default combineReducers({
  menuIds: menuItemsReducer,
  loading: loadingReducer,
  error: errorReducer,
  filter: filterReducer,
  // idItem: menuItemReducer,
});
