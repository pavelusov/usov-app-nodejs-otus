require("@babel/register");
require('dotenv').config();

const mg = require('mongoose');

const UserService = require('./UserService');

describe('User service', () => {
  let conn;
  let service = new UserService();

  beforeAll(() => {
    mg.connect(process.env.MONGODB_TEST_URI, { useNewUrlParser: true });
    conn = mg.connection;
  });

  beforeEach(async (next) => {
    await conn.collections.users.drop();
    next();
  });

  it('should saves an user',  async () => {
    const data = {
      login: 'ipavelusov@gmail.com',
      password: '12345',
    };

    const user = await service.create(data);
    expect(user.login).toBe(data.login);
  });


  afterAll(() => {
    conn.close();
  });
});
