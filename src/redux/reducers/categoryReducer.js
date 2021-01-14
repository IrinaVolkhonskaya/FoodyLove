import { combineReducers } from 'redux';
// import { actionTypes } from '../actionsMenu';
import { createReducer} from '@reduxjs/toolkit';
import actions from '../actionsMenu.js';


const items = createReducer([], {
[actions.fetchCategories]: (state, {payload}) => payload,
});

// function items(state = [], { type, payload }) {
//   switch (type) {
//     case actionTypes.FETCH_CATEGORIES:
//       return payload;

//     default:
//       return state;
//   }
// }

const selectedCategory = createReducer('', {
  [actions.selectCategory]: (state, {payload}) => payload,
})

// function selectedCategory(state = '', { type, payload }) {
//   switch (type) {
//     case actionTypes.SELECT_CATEGORY:
//       return payload;

//     default:
//       return state;
//   }
// }

export default combineReducers({
  items,
  selectedCategory,
});
