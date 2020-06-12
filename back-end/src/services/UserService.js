const User = require('../models/user/User');
const PasswordService = require('../services/PasswordService');
const ErrorService = require('../services/ErrorService');

class UserService {
  async create(options) {
    const { login, password } = options;

    const hashPassword = await PasswordService.hash(password);
    const data = await User.create({ login, password: hashPassword });
    return data;
  }

  async userExist(login) {
    const data = await User.findOne({ login });
    return data;
  }

  async login(options) {
    const { login, password } = options;
    const data = await User.findOne({ login }, 'password');
    if (data) {
      const hasUser = await PasswordService.compare(password, data.password);
      if (hasUser) return { data: { success: true }};
    }

    const loginFieldError = new ErrorService({
      value: login,
      msg: 'The username or password is not correct',
      param: 'login',
      location: 'body'
    });
    const passwordFieldError = new ErrorService({
      value: login,
      msg: 'The username or password is not correct',
      param: 'password',
      location: 'body'
    });
    return {
      data: null,
      errors: [loginFieldError.data, passwordFieldError.data]
    }
  }
}

module.exports = UserService;
