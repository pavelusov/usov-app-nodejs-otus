require('dotenv').config();
const service = require('./JWTService');

describe('JWT service', () => {
  it('should generate token',  () => {
    const login = 'p@mail.ru';
    const token = service.generate(login);
    const data = service.verify(token);
    expect(data.login).toBe(login);
  });
});
