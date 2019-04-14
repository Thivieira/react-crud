//Generate Token using secret from process.env.JWT_SECRET
var jwt = require(‘jsonwebtoken’);

function generateToken(user) {
  //1. Dont use password and other sensitive fields
  //2. Use fields that are useful in other parts of the     
  //app/collections/models
  var u = {
   name: user.name,
   username: user.username,
   id: user.id
  };
  return jwt.sign(u, process.env.JWT_SECRET, {
     expiresIn: 60 * 60 * 24 // expires in 24 hours
  });
}