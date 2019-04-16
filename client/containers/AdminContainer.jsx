import React, { Component } from 'react';
import { connect } from 'react-redux';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../Users/actions';
import Admin from '../views/Admin';

const mapDispatchToProps = dispatch => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('token');
      if (!token || token === '') {
        return;
      }

      dispatch(meFromToken(token)).then(response => {
        if (!response.error) {
          localStorage.setItem('token', response.payload.data.token);
          dispatch(meFromTokenSuccess(response.payload));
        } else {
          localStorage.removeItem('token');
          dispatch(meFromTokenFailure(response.payload));
        }
      });
    },
    resetMe: () => {
      localStorage.removeItem('token');
      dispatch(resetToken());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Admin);
