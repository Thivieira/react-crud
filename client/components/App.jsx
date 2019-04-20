import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admin from '../views/Admin';
import Home from '../views/Home';
import Register from '../views/Register';
import Login from '../views/Login';
import NotFound from '../views/NotFound';
import Users from '../views/Users';
import User from '../views/User';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadUserFromToken();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/register" component={Register} exact />
          <Route path="/login" component={Login} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/users" component={Users} exact />
          <Route path="/user/:id" component={User} exact />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
