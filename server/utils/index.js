require('dotenv').config();

const jwt = require('jsonwebtoken');

function generateToken(user) {
  const u = {
    name: user.name,
    username: user.username,
    admin: user.admin,
    id: user.id,
    image: user.image
  };
  return jwt.sign(u, process.env.JWT_SECRET, {
    expiresIn: 60 * 60 * 24
  });
}

module.exports = {
  generateToken
};
