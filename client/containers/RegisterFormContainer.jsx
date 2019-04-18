import { connect } from 'react-redux';
import RegisterForm from '../components/RegisterForm';
import { withRouter } from 'react-router-dom';

const RegisterFormWithRouter = withRouter(RegisterForm);
export default connect(
  null,
  null
)(RegisterFormWithRouter);
