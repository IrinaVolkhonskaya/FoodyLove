import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { actionTypes } from '../actionsAuth';
import * as actions from '../actionsAuth.ts';

// session: {
//   user: null,
//   isAthenticated: false,
//   isAuthenticating: false,
//   error: null,
//   token: null
// }

const user = createReducer(null, {
  [actions.signUpSuccess]: (state, { payload }) => payload.user,
  [actions.signInSuccess]: (state, { payload }) => payload.user,
  [actions.refreshUserSuccess]: (state, { payload }) => payload.user,
  [actions.signOutSuccess]: (state, { payload }) => null,
});

// const user = (state = null, { type, payload }) => {
//   switch (type) {
//     case actionTypes.SIGN_UP_SUCCESS:
//     case actionTypes.SIGN_IN_SUCCESS:
//     case actionTypes.REFRESH_CURRENT_USER_SUCCESS:
//       return payload.user;

//     case actionTypes.SIGN_OUT_SUCCESS:
//       return null;

//     default:
//       return state;
//   }
// };

const isAuthenticated = createReducer(false, {
  [actions.signInSuccess]: (state, { payload }) => true,
  [actions.signUpSuccess]: (state, { payload }) => true,
  [actions.refreshUserSuccess]: (state, { payload }) => true,
  [actions.signInError]: (state, { payload }) => false,
  [actions.signUpError]: (state, { payload }) => false,
  [actions.signOutSuccess]: (state, { payload }) => false,
});

// const isAuthenticated = (state = false, { type, payload }) => {
//   switch (type) {
//     case actionTypes.SIGN_UP_SUCCESS:
//     case actionTypes.SIGN_IN_SUCCESS:
//     case actionTypes.REFRESH_CURRENT_USER_SUCCESS:
//       return true;

//     case actionTypes.SIGN_UP_ERROR:
//     case actionTypes.SIGN_IN_ERROR:
//     case actionTypes.SIGN_OUT_SUCCESS:
//       return false;

//     default:
//       return state;
//   }
// };

const token = createReducer(null, {
  [actions.signUpSuccess]: (state, { payload }) => payload.token,
  [actions.signInSuccess]: (state, { payload }) => payload.token,
  [actions.signInError]: (state, { payload }) => null,
  [actions.signUpError]: (state, { payload }) => null,
  [actions.signOutSuccess]: (state, { payload }) => null,
});

// const token = (state = null, { type, payload }) => {
//   switch (type) {
//     case actionTypes.SIGN_UP_SUCCESS:
//     case actionTypes.SIGN_IN_SUCCESS:
//       return payload.token;

//     case actionTypes.SIGN_UP_ERROR:
//     case actionTypes.SIGN_IN_ERROR:
//     case actionTypes.SIGN_OUT_SUCCESS:
//       return null;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  user,
  isAuthenticated,
  token,
});
