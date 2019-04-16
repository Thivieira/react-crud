import { connect } from 'react-redux';
import Header from '../partials/Header';
import { withRouter } from 'react-router-dom';

const HeaderWithRouter = withRouter(Header);
export default connect(
  null,
  null
)(HeaderWithRouter);
