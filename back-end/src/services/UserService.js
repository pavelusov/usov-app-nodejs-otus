const User = require('../models/user/User');

class UserService {
  async create(options) {
    const { login, password } = options;
    const data = await User.create({ login, password });
    return data;
  }

  async userExist(login) {
    const data = await User.findOne({ login });
    return data;
  }
}

module.exports = UserService;
