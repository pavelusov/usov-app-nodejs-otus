const { validationResult } = require('express-validator');

const ErrorService = require('../../services/ErrorService');
const UserService = require('../../services/UserService');

const service = new UserService();

class UserController {
  static async validate(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  }

  static async userExist(req, res, next) {
    const { body } = req;
    const existUser = await service.userExist(body.login);

    if (existUser) {
      const error = new ErrorService({
        value: body.login,
        msg: 'The user exists',
        param: 'login',
        location: 'body'
      });

      return res.status(409).json({ errors: [error.data] });
    }

    next();
  }

  static async create(req, res) {
    const { body } = req;

    const user = await service.create({
      login: body.login,
      password: body.password,
    });

    res.send(user);
  }

  static async login(req, res) {
    const { body } = req;

    const data = await service.login({
      login: body.login,
      password: body.password,
    });

    res.send(data);
  }
}

module.exports = UserController;
