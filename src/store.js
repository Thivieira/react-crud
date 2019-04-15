import { createStore, combineReducers } from 'redux';

const initialState = {};

function root(state = initialState, action) {
  return state;
}

/* eslint-disable no-underscore-dangle */
export default createStore(
  combineReducers({
    root
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
