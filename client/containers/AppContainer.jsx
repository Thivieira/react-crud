import { connect } from 'react-redux';
import App from '../components/App';
import {
  meFromToken,
  meFromTokenSuccess,
  meFromTokenFailure,
  resetToken
} from '../actions/authActions';

const mapDispatchToProps = dispatch => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('token');
      if (!token || token === '') {
        return;
      }

      dispatch(meFromToken(token))
        .then(response => {
          if (!response.error) {
            localStorage.setItem('token', response.data.token);
            dispatch(meFromTokenSuccess(response.data));
          } else {
            localStorage.removeItem('token');
            dispatch(meFromTokenFailure(response.data));
          }
        })
        .catch(err => {
          if (err.response.data.message.message === 'Token expirado.') {
            dispatch(resetToken());
            localStorage.removeItem('token');
          } else {
            dispatch(resetToken());
            localStorage.removeItem('token');
          }
        });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
