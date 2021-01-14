import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
// import { actionTypes } from '../actionsCart';
import actions from '../actionsCart.ts';

// console.log(actions);
//карта корзины
// cart: {
//     ids: [1, 2, 3, 4, 5],
//     amout: {
//         1: 5,
//         2: 7
//     }
// }


const ids = createReducer([], {
  [actions.addToCart]: (state, { payload }) =>
    state.includes(payload.id) ? state : [...state, payload.id],
  [actions.removeFromCart]: (state, { payload }) =>
    state.filter(id => id !== payload.id),
});

//old version

// function ids(state = [], { type, payload }) {
//   switch (type) {
//     case actionTypes.ADD_TO_CART:
//       return state.includes(payload.id) ? state : [...state, payload.id];

//     case actionTypes.REMOVE_FROM_CART:
//       return state.filter(id => id !== payload.id);

//     default:
//       return state;
//   }
// }

export const amount = createReducer(
  {},
  {
    [actions.addToCart]: (state, { payload }) => ({
      ...state,
      [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
    }),
    [actions.removeFromCart]: (state, { payload }) => {
      const { [payload.id]: _, ...newState } = state;
      return newState;
    },
    [actions.decreaseFromCart]: (state, { payload }) => ({
      ...state,
      // [payload.id]: state[payload.id] ? state[payload.id] - 1 : 0,
      [payload.id]: state[payload.id] ? state[payload.id] - 1 : 0,

    }),
  },
);

//old version

// function amount(state = {}, { type, payload }) {
//   switch (type) {
//     case actionTypes.ADD_TO_CART:
//       return {
//         ...state,
//         [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1,
//       };

//     case actionTypes.REMOVE_FROM_CART: {
//       const { [payload.id]: _, ...newState } = state; //ключ по id(товар, что нужно удалить), мы деструктуризируем наше состояние, записываем в "левую переменную""_" (в то, что никогда не будем использовать), остальные ключи с значениями (оставшиеся товары в корзине),мы записываем в переменную newState,
//       return newState; // делаем return объекта, но без ключа (того, что нужно удалить).
//     };

//     case actionTypes.DECREASE_FROM_CART:
//       return {
//         ...state,
//         [payload.id]: state[payload.id] ? state[payload.id] - 1 : 0,
//       }

//     default:
//       return state;
//   }
// }

export default combineReducers({
  ids,
  amount,
});
