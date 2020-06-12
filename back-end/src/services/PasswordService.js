const bcrypt = require('bcrypt');
const saltRounds = 10;

class PasswordService {
  static async hash(password) {
    const data = await bcrypt.hash(password, saltRounds);
    return data;
  }

  static async compare(password, hash) {
    const result = bcrypt.compare(password, hash);
    return result;
  }
}

module.exports = PasswordService;
