/* eslint-disable consistent-return */
/* eslint-disable prefer-destructuring */
/* eslint-disable func-names */
const router = require('express').Router();
const users = require('./utils/users');

router.get('/users', function(req, res, next) {
  return res.json({ users });
});

module.exports = router;
