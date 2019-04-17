import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
/* import store from '../store'; */
import Admin from '../views/Admin';
import Home from '../views/Home';
import Login from '../views/Login';
import PageLoader from '../components/PageLoader';
export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    /*     store.subscribe(() => {
      localStorage.setItem('reduxState', JSON.stringify(store.getState()));
    }); */
    this.props.loadUserFromToken();
    console.log('APP isAuthenticated, (componentDidMount)', this.props.isAuthenticated);
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
            render={() => (this.props.isAuthenticated ? <Admin /> : <Redirect to="/login" />)}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
