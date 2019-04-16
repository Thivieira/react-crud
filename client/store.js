import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import users from './Users/reducer';

const initialState = {};

function root(state = initialState, action) {
  return state;
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    root,
    users
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
/* eslint-enable */
export default store;
