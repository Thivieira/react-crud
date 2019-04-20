import axios from 'axios';
import { ROOT_URL } from './../helpers/api';
//User list
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//Create new user
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';

//Fetch user
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

//Delete user
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';

/** NOT AUTH */

export function fetchUsers() {
  return dispatch => {
    dispatch({
      type: FETCH_USERS
    });
    return axios({
      method: 'get',
      url: `${ROOT_URL}/users`,
      headers: []
    });
  };
}

export function fetchUsersSuccess(users) {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
}

export function fetchUsersFailure(error) {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  };
}

export function createUser(props, tokenFromStorage) {
  const request = axios({
    method: 'post',
    data: props,
    url: `${ROOT_URL}/users`,
    headers: {
      Authorization: `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: CREATE_USER,
    payload: request
  };
}

export function createUserSuccess(newUser) {
  return {
    type: CREATE_USER_SUCCESS,
    payload: newUser
  };
}

export function createUserFailure(error) {
  return {
    type: CREATE_USER_FAILURE,
    payload: error
  };
}

export function fetchUser(id) {
  return dispatch => {
    return axios({
      method: 'get',
      url: `${ROOT_URL}/users/${id}`,
      headers: []
    });
  };
}

export function fetchUserSuccess(activeUser) {
  return {
    type: FETCH_USER_SUCCESS,
    payload: activeUser
  };
}

export function fetchUserFailure(error) {
  return {
    type: FETCH_USER_FAILURE,
    payload: error
  };
}

export function deleteUser(id, tokenFromStorage) {
  const request = axios({
    method: 'delete',
    url: `${ROOT_URL}/users/${id}`,
    headers: {
      Authorization: `Bearer ${tokenFromStorage}`
    }
  });
  return {
    type: DELETE_USER,
    payload: request
  };
}

export function deleteUserSuccess(deletedUser) {
  return {
    type: DELETE_USER_SUCCESS,
    payload: deletedUser
  };
}

export function deleteUserFailure(response) {
  return {
    type: DELETE_USER_FAILURE,
    payload: response
  };
}
