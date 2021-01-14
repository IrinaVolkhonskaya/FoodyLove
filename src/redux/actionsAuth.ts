import { createAction } from '@reduxjs/toolkit';

// export const actionTypes = {
//   SIGN_UP_REQUEST: 'session/SIGN_UP_REQUEST',
//   SIGN_UP_SUCCESS: 'session/SIGN_UP_SUCCESS',
//   SIGN_UP_ERROR: 'session/SIGN_UP_ERROR',
//   SIGN_IN_REQUEST: 'session/SIGN_IN_REQUEST',
//   SIGN_IN_SUCCESS: 'session/SIGN_IN_SUCCESS',
//   SIGN_IN_ERROR: 'session/SIGN_IN_ERROR',
//   SIGN_OUT_REQUEST: 'session/SIGN_OUT_REQUEST',
//   SIGN_OUT_SUCCESS: 'session/SIGN_OUT_SUCCESS',
//   SIGN_OUT_ERROR: 'session/SIGN_OUT_ERROR',
//   REFRESH_CURRENT_USER_START: 'session/REFRESH_CURRENT_USER_START',
//   REFRESH_CURRENT_USER_SUCCESS: 'session/REFRESH_CURRENT_USER_SUCCESS',
// };

export const refreshUserStart = createAction(
  'session/REFRESH_CURRENT_USER_START',
);

// export const refreshUserStart = () => ({
//   type: actionTypes.REFRESH_CURRENT_USER_START
// });

export const refreshUserSuccess = createAction(
  'session/REFRESH_CURRENT_USER_SUCCESS',
  user => {
    return {
      payload: {
        user,
      },
    };
  },
);

// export const refreshUserSuccess = user => ({
//   type: actionTypes.REFRESH_CURRENT_USER_SUCCESS,
//   payload: {
//     user,
//   },
// });

export const signUpRequest = createAction('session/SIGN_UP_REQUEST');

// export const signUpRequest = () => ({
//   type: actionTypes.SIGN_UP_REQUEST,
// });

export const signUpSuccess = createAction('session/SIGN_UP_SUCCESS');

// export const signUpSuccess = data => ({
//   type: actionTypes.SIGN_UP_SUCCESS,
//   payload: data,
// });

export const signUpError = createAction('session/SIGN_UP_ERROR', error => {
  return {
    payload: {
      error,
    },
  };
});

// export const signUpError = error => ({
//   type: actionTypes.SIGN_UP_ERROR,
//   payload: {
//     error,
//   },
// });

export const signInRequest = createAction('session/SIGN_IN_REQUEST');

// export const signInRequest = () => ({
//   type: actionTypes.SIGN_IN_REQUEST,
// });


export const signInSuccess = createAction('session/SIGN_IN_SUCCESS');

// export const signInSuccess = data => ({
//   type: actionTypes.SIGN_IN_SUCCESS,
//   payload: data,
// });

export const signInError = createAction('session/SIGN_IN_ERROR', error => {
  return {
    payload: {
      error,
    },
  } 
})

// export const signInError = error => ({
//   type: actionTypes.SIGN_IN_ERROR,
//   payload: {
//     error,
//   },
// });

export const signOutRequest = createAction('session/SIGN_OUT_REQUEST');

// export const signOutRequest = () => ({
//   type: actionTypes.SIGN_OUT_REQUEST,
// });

export const signOutSuccess = createAction('session/SIGN_OUT_SUCCESS');

// export const signOutSuccess = () => ({
//   type: actionTypes.SIGN_OUT_SUCCESS,
// });
