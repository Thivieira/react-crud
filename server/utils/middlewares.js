/* eslint-disable consistent-return */
require('dotenv').config();

const jwt = require('jsonwebtoken');

function verifyTokenMiddleware(req, res, next) {
  let token = req.headers.authorization;
  if (!token) return next();

  token = token.replace('Bearer ', '');

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Necessita estar logado para acessar este recurso.'
      });
    }
    req.user = user;
    next();
  });
}

function ajaxMiddleware(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Request-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
}

module.exports = {
  verifyTokenMiddleware,
  ajaxMiddleware
};
