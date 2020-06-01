require('dotenv').config();

const mg = require('mongoose');

const UserService = require('./UserService');
const JWTService = require('./JWTService');
const CourseService = require('./CourseService');

describe('Course service', () => {

  let userService = new UserService();
  let conn;
  let user;

  beforeAll(() => {
    mg.connect(process.env.MONGODB_TEST_URI, { useNewUrlParser: true });
    conn = mg.connection;
  });


  beforeEach(async (next) => {
    const data = {
      login: 'ipavelusov@gmail.com',
      password: '12345',
    };

    user = await userService.create(data);

    next();
  });

  afterEach(async (next) => {
    await conn.collections.courses.drop();
    await conn.collections.users.drop();
    next();
  });

  it('should saves a course',  async () => {
    const course = await CourseService.create({
      userId: user,
      title: 'Nodejs course',
      description: 'course description',
      image: 'https://itvdn.blob.core.windows.net/catalog-images/node_js-img.jpg',
      link: '1',
    });
    expect(user._id).toBe(course.userId);
  });


  afterAll(() => {
    conn.close();
  });
});
