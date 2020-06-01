const mg = require('mongoose');
const { Schema } = mg;
const { UserSchema } = require('../user/User');

const LinkSchema = new Schema({
  title: String,
  link: String,
  type: String,
});

const ClassRoomSchema = new Schema({
  title: String,
  description: String,
  date: String,
  links: [LinkSchema]
});

const CourseSchema = new Schema({
  userId: {
    type: mg.Schema.Types.ObjectId,
    ref: 'User'
  },
  title: String,
  description: String,
  image: String,
  link: String,
  classRooms: [ClassRoomSchema],
  permittedUsers: [UserSchema]
});

const Course = mg.model('course', CourseSchema);

module.exports = {
  Course,
  CourseSchema,
  ClassRoomSchema,
  LinkSchema
};
