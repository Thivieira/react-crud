/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const generateToken = require('./utils').generateToken;
const users = require('./utils/users');
const validate = require('./utils/validate');

router.post('/users/signup', function(req, res, next) {
  var body = req.body;

  var errors = validate.validateSignUpForm(body);
  if (errors) {
    return res.status(403).json(errors);
  }

  var hash = bcrypt.hashSync(body.password.trim(), 10);

  var user = {
    nome: body.nome.trim(),
    telefone: body.telefone.trim(),
    email: body.email.trim(),
    username: body.username.trim(),
    password: hash
  };

  users.push(user);

  console.log(users);

  var token = generateToken(user);

  let userCopy = JSON.parse(JSON.stringify(user));
  delete userCopy.password;
  res.json({
    user: userCopy,
    token
  });
});

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
    if (err) {
      if (err.message === 'jwt expired') {
        return res.status(401).json({
          error: true,
          message: { message: 'Token expirado.' }
        });
      }
      return res.status(401).json({
        error: true,
        message: err
      });
    }

    const user = users.find(function(user) {
      return user.id == userTkn.id;
    });

    if (user === undefined) {
      return res.status(401).json({
        error: true,
        message: 'Token inválido.'
      });
    }
    let userCopy = JSON.parse(JSON.stringify(user));
    delete userCopy.password;
    res.json({
      user: userCopy,
      token
    });
  });
});

module.exports = router;
