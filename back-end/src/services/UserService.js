const User = require('../models/user/User');

class UserService {
  async create(options) {
    const { login, password } = options;
    const user = new User({ login, password });
    const data = await user.save();
    return data;
  }

  async userExist(login) {
    const data = await User.findOne({ login });
    return data;
  }
}

module.exports = UserService;
