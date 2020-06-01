require('dotenv').config();

const { User } = require('../user/User');
const { Course } = require('./Course');
const mg = require('mongoose');

describe('Course model', () => {
  let conn;
  let user;

  beforeAll(async () => {
    mg.connect(process.env.MONGODB_TEST_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    conn = mg.connection;
  });

  beforeEach(async (next) => {
    user = new User({
      login: 'pavel@mail.com'
    });

    await user.save();
    next();
  });

  afterEach(async (next) => {
    await conn.collections.users.drop();
    await conn.collections.courses.drop();
    next();
  });

  describe('Creating course', () => {
    it('should saves the course', async () => {
      const course = new Course({
        userId: user,
        title: 'Nodejs course',
        description: 'course description',
        image: 'https://itvdn.blob.core.windows.net/catalog-images/node_js-img.jpg',
        link: '1',
      });

      await course.save();

      expect(user._id).toBe(course.userId);
    });
  });

  afterAll(() => {
    conn.close();
  });
});
