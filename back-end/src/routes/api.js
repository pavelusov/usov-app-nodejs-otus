const express = require('express');
const UserController = require('../controllers/UserController');
const { check } = require('express-validator');

const router = express.Router();
router
  .get('/api/users', function(req, res, next) {
    res.send('users');
  })
  .post(
    '/api/users',
    [
      check('login').isEmail(),
      check('password').isLength({ min: 5 })
    ],
    UserController.validate,
    UserController.userExist,
    UserController.create,
  );

module.exports = router;
