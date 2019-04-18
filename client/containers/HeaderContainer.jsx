import { connect } from 'react-redux';
import Header from '../partials/Header';
import { withRouter } from 'react-router-dom';
import { resetToken } from '../actions/authActions';

const mapDispatchToProps = dispatch => {
  return {
    resetMe: e => {
      localStorage.removeItem('token');
      dispatch(resetToken());
    }
  };
};

const HeaderWithRouter = withRouter(Header);

export default connect(
  state => ({ user: state.auth.user }),
  mapDispatchToProps
)(HeaderWithRouter);
