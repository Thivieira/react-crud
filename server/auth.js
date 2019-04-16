/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateToken = require('./utils').generateToken;
const users = require('./utils/users');

router.post('/users/signin', function(req, res) {
  let user;
  user = users.find(function(u) {
    return u.username == req.body.identifier ? true : u.email == req.body.identifier ? true : false;
  });
  if (user === undefined) {
    return res.status(404).json({
      error: true,
      message: 'Senha ou Usuário estão errados.'
    });
  }

  console.log('req.password: ', req.body.password);
  console.log('user: ', user);
  console.log('user.password: ', user.password);

  bcrypt.compare(req.body.password, user.password, function(err, valid) {
    if (!valid) {
      return res.status(404).json({
        error: true,
        message: 'Senha errada.'
      });
    }

    const token = generateToken(user);
    let userCopy = JSON.parse(JSON.stringify(user));
    delete userCopy.password;
    res.json({
      user: userCopy,
      token
    });
  });
});

router.get('/me/from/token', (req, res, next) => {
  const token = req.body.token || req.query.token;
  if (!token) {
    return res.status(401).json({ message: 'Deve conter token.' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, userTkn) => {
    if (err) throw err;

    const user = users.find(function(user) {
      return user.id.toString() === userTkn.id;
    });

    if (user === undefined) {
      return res.status(401).json({
        error: true,
        message: 'Token inválido.'
      });
    }

    delete user.password;
    res.json({
      user,
      token
    });
  });
});

module.exports = router;