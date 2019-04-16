import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import user from './reducers/userReducer';
import users from './reducers/usersReducer';

const initialState = {};

function root(state = initialState, action) {
  return state;
}

const persistedState = localStorage.getItem('reduxState')
  ? JSON.parse(localStorage.getItem('reduxState'))
  : {};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    root,
    user,
    users,
    persistedState
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
/* eslint-enable */
export default store;
