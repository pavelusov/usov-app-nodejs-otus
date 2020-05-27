require('dotenv').config();

const mg = require('mongoose');

const UserService = require('./UserService');
const PasswordService = require('./PasswordService');

describe('User service', () => {

  let service = new UserService();
  let conn;
  beforeAll(() => {
    mg.connect(process.env.MONGODB_TEST_URI, { useNewUrlParser: true });
    conn = mg.connection;
  });

  afterEach(async (next) => {
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

  it('should find user and check password',  async () => {
    const data = {
      login: 'ipavelusov@gmail.com',
      password: '12345',
    };

    await service.create(data);
    const hasUser = await service.login(data);
    expect(hasUser).toBeTruthy();
  });


  afterAll(() => {
    conn.close();
  });
});
