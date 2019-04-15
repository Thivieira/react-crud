import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  null
)(LoginForm);
