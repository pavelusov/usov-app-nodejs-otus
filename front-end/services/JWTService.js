const jwt = require('jsonwebtoken');
const ErrorService = require('../services/ErrorService');

class JWTService {
  static generate(login) {
  return jwt.sign(
    { login },
    process.env.JWT_SECRET,
    { audience: login });
  };

  static async verify(token) {
    try {
      const data = await jwt.verify(token, process.env.JWT_SECRET);
      return data;
    } catch(e) {
      const error = new ErrorService({ param: 'access token', value: 'verify', msg: e.message, location: 'JWTService'})
      return error.data;
    }
  }
}

module.exports = JWTService;
