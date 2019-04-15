import { connect } from 'react-redux';
import UsersForm from '../components/UsersForm';
import { resetNewUser } from '../Users/actions';

const mapDispatchToProps = dispatch => {
  return {
    resetMe: () => {
      dispatch(resetNewUser());
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    newUser: state.users.newUser
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersForm);
