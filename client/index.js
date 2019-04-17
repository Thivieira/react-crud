/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import store from './store';
import { saveState } from './helpers/localStorage';
import App from './containers/AppContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

store.subscribe(() => {
  throttle(() => {
    saveState({ auth: store.getState().auth });
  }, 1000);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
