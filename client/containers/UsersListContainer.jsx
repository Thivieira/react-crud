import { connect } from 'react-redux';
import UsersList from './../components/UsersList';
import {
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFailure,
  fetchUser
} from './../actions/usersActions';

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers() {
      dispatch(fetchUsers())
        .then(res => {
          dispatch(fetchUsersSuccess(res.data.users));
        })
        .catch(err => {
          dispatch(fetchUsersFailure(err));
        });
    },
    onUserClick: id => {
      dispatch(fetchUser(id));
    }
  };
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.users.usersList.users,
    isFetching: state.users.usersList.loading
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersList);
