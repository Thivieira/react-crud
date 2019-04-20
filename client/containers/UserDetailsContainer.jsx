import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';
// import {
//   fetchUsers,
//   fetchUsersSuccess,
//   fetchUsersFailure,
//   fetchUser
// } from './../actions/usersActions';

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUsers() {
//       dispatch(fetchUsers())
//         .then(data => {
//           dispatch(fetchUserSuccess(data.users));
//         })
//         .catch(err => {
//           dispatch(fetchUserFailure(err));
//         });
//     },
//     onUserClick: id => {
//       dispatch(fetchUser(id));
//     }
//   };
// };

// function mapStateToProps(state, ownProps) {
//   return {
//     users: state.users
//   };
// }

export default connect(
  null,
  null
)(UserDetails);
//   mapStateToProps,
//   mapDispatchToProps
