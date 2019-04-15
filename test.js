const users = require('./server/utils/users');

function user(username) {
  const user = users.find(function(user) {
    return user.username === username;
  });
  console.log(user);
}

user('admini');
