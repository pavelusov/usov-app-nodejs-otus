const jwt = require('jsonwebtoken');

class JWTService {
  static generate(login) {
  return jwt.sign(
    { login },
    process.env.JWT_SECRET,
    { audience: login });
  };

  static verify(token) {
    return jwt.verify(token, process.env.JWT_SECRET);
  }

  static getTokenFromHeaders(headers) {
    if (typeof headers.authorization !== 'undefined') {
      const token = headers.authorization.split(' ')[1];
      return token
    }
    return;
  }
}

module.exports = JWTService;
