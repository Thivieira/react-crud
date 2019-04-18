import { connect } from 'react-redux';
import App from '../components/App';
import { meFromToken, meFromTokenSuccess, meFromTokenFailure } from '../actions/authActions';

const mapDispatchToProps = dispatch => {
  return {
    loadUserFromToken: () => {
      let token = localStorage.getItem('token');
      if (!token || token === '') {
        return;
      }

      dispatch(meFromToken(token)).then(response => {
        if (!response.error) {
          localStorage.setItem('token', response.data.token);
          dispatch(meFromTokenSuccess(response.data));
        } else {
          localStorage.removeItem('token');
          dispatch(meFromTokenFailure(response.data));
        }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
