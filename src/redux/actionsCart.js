import { createAction } from '@reduxjs/toolkit';

//old version
// export const actionTypes = {
//   ADD_TO_CART: 'cart/ADD_TO_CART',
//   REMOVE_FROM_CART: 'cart/REMOVE_FROM_CART',
//   DECREASE_FROM_CART: 'cart/DECREASE_FROM_CART',
// };

const addToCart = createAction('cart/ADD_TO_CART', id => {
  return {
    
    payload: {
      id,
    },
  };
});
//console.log(addToCart(1))

const removeFromCart = createAction('cart/REMOVE_FROM_CART', id => {
  return {
    payload: {
      id,
    },
  };
});

const decreaseFromCart = createAction('cart/DECREASE_FROM_CART', id => {
  return {
    payload: {
      id,
    },
  };
});

export default { addToCart, removeFromCart, decreaseFromCart };
