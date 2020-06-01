const { Course } = require('../models/course/Course');

class CourseService {
  static async create(options) {
    const { userId, title, description, image, link } = options;

    const course = new Course({
      userId,
      title,
      description,
      image,
      link,
      permittedUsers: [userId],
    });

    const data = await course.save();
    return data;
  }
  static async fetch(options) {
    const { userId } = options;
    const data = Course.fetch({});
    return data;
  }
}

module.exports = CourseService;