import {
  ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
  RESET_TOKEN,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_EMAIL,
  RESET_USER
} from '../actions/authActions';

//user = userobj,
// status can be:
// 1. 'storage' ie. localstorage / localStorage)
// 2. 'signup' (signing up)
// 3. 'signin' (signing in)
// 4. 'validate'(validate fields)
// 5. 'validate_email' (validating email token)
// 5. 'authenticated'(after signin)
// 6. 'logout' (after logout)

const INITIAL_STATE = {
  user: { token: null },
  status: 'AUTH_REDUCER_INIT',
  error: null,
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  let error;
  switch (action.type) {
    case ME_FROM_TOKEN: // loading currentUser("me") from token in local/session storage storage,
      return {
        ...state,
        user: { token: null },
        status: 'STORAGE',
        error: null,
        loading: true
      };
    case ME_FROM_TOKEN_SUCCESS: //return user, status = authenticated and make loading = false
      return {
        ...state,
        user: { ...action.payload.user, token: action.payload.token },
        status: 'AUTHENTICATED',
        error: null,
        loading: false
      }; //<-- authenticated
    case ME_FROM_TOKEN_FAILURE: // return error and make loading = false
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return {
        ...state,
        user: { token: null },
        status: 'STORAGE',
        error: error,
        loading: false
      };
    case SIGNUP_USER:
      return { ...state, user: { token: null }, status: 'signup', error: null, loading: true };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: { ...action.payload.user, token: action.payload.token },
        status: 'authenticated',
        error: null,
        loading: false
      };
    case SIGNUP_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message }; //2nd one is network or server down errors
      return { ...state, user: { token: null }, status: 'signup', error: error, loading: false };

    case RESET_TOKEN:
      return {
        ...state,
        user: { token: null },
        status: 'STORAGE',
        error: null,
        loading: false
      };

    case LOGIN_USER:
      return {
        ...state,
        user: { token: null },
        status: 'SIGNIN',
        error: null,
        loading: true
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: { ...action.payload.user, token: action.payload.token },
        status: 'AUTHENTICATED',
        error: null,
        loading: false
      };
    case LOGIN_USER_FAILURE:
      error = action.payload.data || { message: action.payload.message };
      return {
        ...state,
        user: { token: null },
        status: 'SIGNIN',
        error: error,
        loading: false
      };

    case UPDATE_USER_EMAIL:
      return {
        ...state,
        user: { ...state.user, email: action.payload.email, token: action.payload.token }
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: { token: null },
        status: 'LOGOUT',
        error: null,
        loading: false
      };

    case RESET_USER:
      return { ...state, user: { token: null }, status: null, error: null, loading: false };

    default:
      return state;
  }
}
