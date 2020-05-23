require('dotenv').config();

const User = require('./User');
const mg = require('mongoose');

describe('insert', () => {
  let conn;

  beforeAll(async () => {
    mg.connect(process.env.MONGODB_TEST_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    conn = mg.connection;
  });

  beforeEach(async (next) => {
    await conn.collections.users.drop();
    next();
  });

  describe('Creating records', () => {
    test('should saves an user', async () => {
      const Pavel = new User({
        login: 'ipavelusov45677mmm@gmail.com'
      });

      await Pavel.save();
    });
  });

  afterAll(() => {
  });
});
