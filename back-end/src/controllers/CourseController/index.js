const { validationResult } = require('express-validator');

const ErrorService = require('../../services/ErrorService');
const CourseService = require('../../services/CourseService');
const JWTService = require('../../services/JWTService');
const UserService = require('../../services/UserService');

class CourseController {
  static async validate(req, res, next) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    next();
  }

  static async create(req, res) {
    const { body, headers } = req;
    const token = JWTService.getTokenFromHeaders(headers);
    const tokenData = JWTService.verify(token);

    if (typeof tokenData.login !== 'undefined') {
      const user = await new UserService().userExist(tokenData.login);
      if (user) {
        const course = await CourseService.create({
          userId: user,
          title: body.title,
          description: body.description,
          image: body.image,
          link: body.link,
          permittedUsers: [user]
        });

        return res.send({ data: { msg: true }});
      }

    }

    const error = new ErrorService({
      value: 'title',
      msg: 'You cannot create a course. Please try again later.',
      param: 'title',
      location: 'course controller'
    });

    res.send({
      data: null,
      errors: [error.data]
    });
  }

  static async fetch(req, res) {
    const { body, headers } = req;
    const token = JWTService.getTokenFromHeaders(headers);
    const tokenData = JWTService.verify(token);

    if (typeof tokenData.login !== 'undefined') {
      const user = await new UserService().userExist(tokenData.login);
      if (user) {
        const course = await CourseService.fetch({ userId: user });
        if (course) {
          return res.send({ data: { msg: course }});
        }
      }

    }

    const error = new ErrorService({
      value: 'title',
      msg: 'You cannot create a course. Please try again later.',
      param: 'title',
      location: 'course controller'
    });

    res.send({
      data: null,
      errors: [error.data]
    });
  }
}

module.exports = CourseController;
