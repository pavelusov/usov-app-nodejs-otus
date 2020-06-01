const mg = require('mongoose');
const { Schema } = mg;

const UserSchema = new Schema({
  login: String,
  password: String,
  refreshToken: String
});

const User = mg.model('user', UserSchema);

module.exports = {
  User,
  UserSchema
};
