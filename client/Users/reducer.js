import {
  ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
  RESET_TOKEN,
  SIGNIN_USER,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_EMAIL,
  RESET_USER,
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
} from './actions';

//user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / localStorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = { user: null, status: null, error: null, loading: false };

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case ME_FROM_TOKEN: // loading currentUser("me") from jwttoken in local/session storage storage,
      return { ...state, user: null, status: 'storage', error: null, loading: true };
    case ME_FROM_TOKEN_SUCCESS: //return user, status = authenticated and make loading = false
      return {
        ...state,
        user: action.payload.data.user,
        status: 'authenticated',
        error: null,
        loading: false
      }; //<-- authenticated
    case ME_FROM_TOKEN_FAILURE: // return error and make loading = false
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, user: null, status: 'storage', error: error, loading: false };
    case RESET_TOKEN: // remove token from storage make loading = false
      return { ...state, user: null, status: 'storage', error: null, loading: false };

    case SIGNIN_USER: // sign in user,  set loading = true and status = signin
      return { ...state, user: null, status: 'signin', error: null, loading: true };
    case SIGNIN_USER_SUCCESS: //return authenticated user,  make loading = false and status = authenticated
      return {
        ...state,
        user: action.payload.user,
        status: 'authenticated',
        error: null,
        loading: false
      }; //<-- authenticated
    case SIGNIN_USER_FAILURE: // return error and make loading = false
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, user: null, status: 'signin', error: error, loading: false };

    case UPDATE_USER_EMAIL:
      return { ...state, user: { ...state.user, email: action.payload.email } };

    case LOGOUT_USER:
      return { ...state, user: null, status: 'logout', error: null, loading: false };

    case RESET_USER: // reset authenticated user to initial state
      return { ...state, user: null, status: null, error: null, loading: false };

    default:
      return state;
  }
}

// const INITIAL_STATE = {
//   usersList: { users: [], error: null, loading: false },
//   newUser: { user: null, error: null, loading: false },
//   activeUser: { user: null, error: null, loading: false },
//   deletedUser: { user: null, error: null, loading: false }
// };

// export default function(state = INITIAL_STATE, action) {
//   let error;
//   switch (action.type) {
//     case FETCH_USERS: // start fetching users and set loading = true
//       return { ...state, usersList: { users: [], error: null, loading: true } };
//     case FETCH_USERS_SUCCESS: // return list of users and make loading = false
//       return { ...state, usersList: { users: action.payload, error: null, loading: false } };
//     case FETCH_USERS_FAILURE: // return error and make loading = false
//       error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
//       return { ...state, usersList: { users: [], error: error, loading: false } };
//     case RESET_USERS: // reset userList to initial state
//       return { ...state, usersList: { users: [], error: null, loading: false } };

//     case FETCH_USER:
//       return { ...state, activeUser: { ...state.activeUser, loading: true } };
//     case FETCH_USER_SUCCESS:
//       return { ...state, activeUser: { user: action.payload, error: null, loading: false } };
//     case FETCH_USER_FAILURE:
//       error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
//       return { ...state, activeUser: { user: null, error: error, loading: false } };
//     case RESET_ACTIVE_USER:
//       return { ...state, activeUser: { user: null, error: null, loading: false } };

//     case CREATE_USER:
//       return { ...state, newUser: { ...state.newUser, loading: true } };
//     case CREATE_USER_SUCCESS:
//       return { ...state, newUser: { user: action.payload, error: null, loading: false } };
//     case CREATE_USER_FAILURE:
//       error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
//       return { ...state, newUser: { user: null, error: error, loading: false } };
//     case RESET_NEW_USER:
//       return { ...state, newUser: { user: null, error: null, loading: false } };

//     case DELETE_USER:
//       return { ...state, deletedUser: { ...state.deletedUser, loading: true } };
//     case DELETE_USER_SUCCESS:
//       return { ...state, deletedUser: { user: action.payload, error: null, loading: false } };
//     case DELETE_USER_FAILURE:
//       error = action.payload || { message: action.payload.message }; //2nd one is network or server down errors
//       return { ...state, deletedUser: { user: null, error: error, loading: false } };
//     case RESET_DELETED_USER:
//       return { ...state, deletedUser: { user: null, error: null, loading: false } };

//     case VALIDATE_USER_FIELDS:
//       return { ...state, newUser: { ...state.newUser, error: null, loading: true } };
//     case VALIDATE_USER_FIELDS_SUCCESS:
//       return { ...state, newUser: { ...state.newUser, error: null, loading: false } };
//     case VALIDATE_USER_FIELDS_FAILURE:
//       let result = action.payload;
//       if (!result) {
//         error = { message: action.payload.message };
//       } else {
//         error = {
//           title: result.title,
//           categories: result.categories,
//           description: result.description
//         };
//       }
//       return { ...state, newUser: { ...state.newUser, error: error, loading: false } };
//     case RESET_USER_FIELDS:
//       return { ...state, newUser: { ...state.newUser, error: null, loading: null } };
//     default:
//       return state;
//   }
// }
