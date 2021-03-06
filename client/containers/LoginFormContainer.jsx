import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import { withRouter } from 'react-router-dom';

const LoginFormWithRouter = withRouter(LoginForm);
export default connect(
  null,
  null
)(LoginFormWithRouter);
