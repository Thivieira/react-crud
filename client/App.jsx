import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminContainer from './containers/AdminContainer';
import Home from './views/Home';
import Login from './views/Login';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} exact />
      <Route path="/admin" component={AdminContainer} exact />
    </Switch>
  </BrowserRouter>
);
