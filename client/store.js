import { createStore, combineReducers } from 'redux';

const initialState = {};

function root(state = initialState, action) {
  return state;
}

/* eslint-disable no-underscore-dangle */
const store = createStore(
  combineReducers({
    root
  }),

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
export default store;
