const express = require('express');
const UserController = require('../controllers/UserController');
const { check } = require('express-validator');

const router = express.Router();
router
  .post('/api/user/signin',
    [
      check('login').isEmail(),
      check('password').isLength({ min: 5 })
    ],
    UserController.validate,
    UserController.login,
    )
  .post(
    '/api/user/signup',
    [
      check('login').isEmail(),
      check('password').isLength({ min: 5 })
    ],
    UserController.validate,
    UserController.userExist,
    UserController.create,
  );

module.exports = router;
