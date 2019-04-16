import axios from 'axios';
import { ROOT_URL } from './../helpers/api';
//User list
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';
export const RESET_USERS = 'RESET_USERS';

//Create new user
export const CREATE_USER = 'CREATE_USER';
export const CREATE_USER_SUCCESS = 'CREATE_USER_SUCCESS';
export const CREATE_USER_FAILURE = 'CREATE_USER_FAILURE';
export const RESET_NEW_USER = 'RESET_NEW_USER';

//Validate user fields like Title, Categries on the server
export const VALIDATE_USER_FIELDS = 'VALIDATE_USER_FIELDS';
export const VALIDATE_USER_FIELDS_SUCCESS = 'VALIDATE_USER_FIELDS_SUCCESS';
export const VALIDATE_USER_FIELDS_FAILURE = 'VALIDATE_USER_FIELDS_FAILURE';
export const RESET_USER_FIELDS = 'RESET_USER_FIELDS';

//Fetch user
export const FETCH_USER = 'FETCH_USER';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';
export const RESET_ACTIVE_USER = 'RESET_ACTIVE_USER';

//Delete user
export const DELETE_USER = 'DELETE_USER';
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS';
export const DELETE_USER_FAILURE = 'DELETE_USER_FAILURE';
export const RESET_DELETED_USER = 'RESET_DELETED_USER';

export function meFromToken(tokenFromStorage) {
  //check if the token is still valid, if so, get me from the server

  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/me/from/token?token=${tokenFromStorage}`,
    headers: {
      Authorization: `Bearer ${tokenFromStorage}`
    }
  });

  return {
    type: ME_FROM_TOKEN,
    payload: request
  };
}

/** NOT AUTH */

export function fetchUsers() {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/users`,
    headers: []
  });

  return {
    type: FETCH_USERS,
    payload: request
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

export function validateUserFields(props) {
  //note: we cant have /users/validateFields because it'll match /users/:id path!
  const request = axios.post(`${ROOT_URL}/users/validate/fields`, props);

  return {
    type: VALIDATE_USER_FIELDS,
    payload: request
  };
}

export function validateUserFieldsSuccess() {
  return {
    type: VALIDATE_USER_FIELDS_SUCCESS
  };
}

export function validateUserFieldsFailure(error) {
  return {
    type: VALIDATE_USER_FIELDS_FAILURE,
    payload: error
  };
}

export function resetUserFields() {
  return {
    type: RESET_USER_FIELDS
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

export function resetNewUser() {
  return {
    type: RESET_NEW_USER
  };
}
export function resetDeletedUser() {
  return {
    type: RESET_DELETED_USER
  };
}
export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/users/${id}`);

  return {
    type: FETCH_USER,
    payload: request
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

export function resetActiveUser() {
  return {
    type: RESET_ACTIVE_USER
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
