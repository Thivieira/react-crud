import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App';
import {
  meFromToken,
  meFromTokenSuccess,
  meFromTokenFailure,
  resetToken
} from '../actions/userActions';

const mapStateToProps = state => {
  console.log(state.user);
  return { isAuthenticated: state.user.user.IsloggedIn || false };
};

const mapDispatchToProps = dispatch => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('token');
      if (!token || token === '') {
        //if there is no token, dont bother
        return;
      }
      //fetch user from token (if server deems it’s valid token)
      dispatch(meFromToken(token)).then(response => {
        if (!response.error) {
          //store token
          localStorage.setItem('token', response.data.token);
          dispatch(meFromTokenSuccess(response.data));
        } else {
          //remove token from storage
          localStorage.removeItem('token');
          dispatch(meFromTokenFailure(response.data));
        }
      });
    },
    resetMe: () => {
      // logout
      localStorage.removeItem('token'); //remove token from storage
      dispatch(resetToken());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
