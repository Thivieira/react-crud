import { connect } from 'react-redux';
import Header from '../partials/Header';
import { withRouter } from 'react-router-dom';
import { resetToken } from '../actions/authActions';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.user.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetMe: () => {
      // logout
      localStorage.removeItem('token');
      dispatch(resetToken());
    }
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderWithRouter);
