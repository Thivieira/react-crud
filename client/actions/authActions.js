import axios from 'axios';
import { ROOT_URL } from '../helpers/api';
//Get current user(me) from token in localStorage
export const ME_FROM_TOKEN = 'ME_FROM_TOKEN';
export const ME_FROM_TOKEN_SUCCESS = 'ME_FROM_TOKEN_SUCCESS';
export const ME_FROM_TOKEN_FAILURE = 'ME_FROM_TOKEN_FAILURE';
export const RESET_TOKEN = 'RESET_TOKEN';

//Sign Up User
export const SIGNUP_USER = 'SIGNUP_USER';
export const SIGNUP_USER_SUCCESS = 'SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_FAILURE = 'SIGNUP_USER_FAILURE';
export const RESET_USER = 'RESET_USER';

//Sign In User
export const LOGIN_USER = 'LOGIN_USER';
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';

//called when email is updated in profile to update main user's email state
export const UPDATE_USER_EMAIL = 'UPDATE_USER_EMAIL';

//log out user
export const LOGOUT_USER = 'LOGOUT_USER';

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server
  return dispatch => {
    dispatch({
      type: ME_FROM_TOKEN
    });
    return axios({
      method: 'get',
      url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
      headers: {
        Authorization: `Bearer ${tokenFromStorage}`
      }
    });
  };
}

export function meFromTokenSuccess(currentUser) {
  return {
    type: ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  };
}

export function meFromTokenFailure(error) {
  return {
    type: ME_FROM_TOKEN_FAILURE,
    payload: error
  };
}

export function resetToken() {
  //used for logout
  return {
    type: RESET_TOKEN
  };
}

export function signUpUser(formValues) {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${ROOT_URL}/users/signup`,
      data: formValues
    });
  };
}

export function signUpUserSuccess(user) {
  return {
    type: SIGNUP_USER_SUCCESS,
    payload: user
  };
}

export function signUpUserFailure(error) {
  return {
    type: SIGNUP_USER_FAILURE,
    payload: error
  };
}

export function resetUser() {
  return {
    type: RESET_USER
  };
}

export function signInUser(formValues) {
  return dispatch => {
    return axios({
      method: 'post',
      url: `${ROOT_URL}/users/signin`,
      data: formValues
    });
  };
}

export function signInUserSuccess(payload) {
  return {
    type: LOGIN_USER_SUCCESS,
    payload
  };
}

export function signInUserFailure(error) {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error
  };
}

export function logoutUser() {
  return {
    type: LOGOUT_USER
  };
}

export function updateUserEmail(email) {
  return {
    type: UPDATE_USER_EMAIL,
    payload: email
  };
}
