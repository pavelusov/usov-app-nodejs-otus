require('dotenv').config();

module.exports = {
  env: {
    API_HOST: process.env.API_HOST,
    JWT_SECRET: process.env.JWT_SECRET
  },
};
