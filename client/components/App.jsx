import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Admin from '../views/Admin';
import Home from '../views/Home';
import Login from '../views/Login';
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
          <Route path="/login" component={Login} exact />
          <Route path="/admin" component={Admin} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}
