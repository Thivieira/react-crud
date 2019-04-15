import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users';
import Admin from '../App';

const mapDispatchToProps = dispatch => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('jwtToken');
      if (!token || token === '') {
        return;
      }

      dispatch(meFromToken(token)).then(response => {
        if (!response.error) {
          localStorage.setItem('jwtToken', response.payload.data.token);
          dispatch(meFromTokenSuccess(response.payload));
        } else {
          localStorage.removeItem('jwtToken');
          dispatch(meFromTokenFailure(response.payload));
        }
      });
    },
    resetMe: () => {
      localStorage.removeItem('jwtToken');
      dispatch(resetToken());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Admin);
