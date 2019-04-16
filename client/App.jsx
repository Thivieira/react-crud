import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import store from './store';
import Admin from './views/Admin';
import Home from './views/Home';
import Login from './views/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
    store.subscribe(() => {
      localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    });
  }

  componentDidMount() {
    console.log('hey', store.getState().users.isLoggedIn);
    this.setState(state => {
      isAuthenticated: store.getState().users.isLoggedIn;
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/login" component={Login} exact />
          <Route
            path="/admin"
            exact
            render={() => (!this.state.isAuthenticated ? <Redirect to="/login" /> : <Admin />)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
