import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  RESET_USERS,
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  RESET_ACTIVE_USER,
  CREATE_USER,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  RESET_NEW_USER,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  RESET_DELETED_USER,
  VALIDATE_USER_FIELDS,
  VALIDATE_USER_FIELDS_SUCCESS,
  VALIDATE_USER_FIELDS_FAILURE,
  RESET_USER_FIELDS
} from '../actions/usersActions';

const INITIAL_STATE = {
  usersList: { users: [], error: null, loading: false },
  newUser: { user: null, error: null, loading: false },
  activeUser: { user: null, error: null, loading: false },
  deletedUser: { user: null, error: null, loading: false }
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case FETCH_USERS: // start fetching users and set loading = true
      return { ...state, usersList: { users: [], error: null, loading: true } };
    case FETCH_USERS_SUCCESS: // return list of users and make loading = false
      return { ...state, usersList: { users: action.payload, error: null, loading: false } };
    case FETCH_USERS_FAILURE: // return error and make loading = false
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, usersList: { users: [], error: error, loading: false } };
    case RESET_USERS: // reset userList to initial state
      return { ...state, usersList: { users: [], error: null, loading: false } };

    case FETCH_USER:
      return { ...state, activeUser: { ...state.activeUser, loading: true } };
    case FETCH_USER_SUCCESS:
      return { ...state, activeUser: { user: action.payload, error: null, loading: false } };
    case FETCH_USER_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, activeUser: { user: null, error: error, loading: false } };
    case RESET_ACTIVE_USER:
      return { ...state, activeUser: { user: null, error: null, loading: false } };

    case CREATE_USER:
      return { ...state, newUser: { ...state.newUser, loading: true } };
    case CREATE_USER_SUCCESS:
      return { ...state, newUser: { user: action.payload, error: null, loading: false } };
    case CREATE_USER_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, newUser: { user: null, error: error, loading: false } };
    case RESET_NEW_USER:
      return { ...state, newUser: { user: null, error: null, loading: false } };

    case DELETE_USER:
      return { ...state, deletedUser: { ...state.deletedUser, loading: true } };
    case DELETE_USER_SUCCESS:
      return { ...state, deletedUser: { user: action.payload, error: null, loading: false } };
    case DELETE_USER_FAILURE:
      error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, deletedUser: { user: null, error: error, loading: false } };
    case RESET_DELETED_USER:
      return { ...state, deletedUser: { user: null, error: null, loading: false } };

    case VALIDATE_USER_FIELDS:
      return { ...state, newUser: { ...state.newUser, error: null, loading: true } };
    case VALIDATE_USER_FIELDS_SUCCESS:
      return { ...state, newUser: { ...state.newUser, error: null, loading: false } };
    case VALIDATE_USER_FIELDS_FAILURE:
      let result = action.payload;
      if (!result) {
        error = { message: action.payload.message };
      } else {
        error = {
          title: result.title,
          categories: result.categories,
          description: result.description
        };
      }
      return { ...state, newUser: { ...state.newUser, error: error, loading: false } };
    case RESET_USER_FIELDS:
      return { ...state, newUser: { ...state.newUser, error: null, loading: null } };
    default:
      return state;
  }
}
