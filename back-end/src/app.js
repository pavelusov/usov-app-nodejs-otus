const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mg = require('mongoose');
const cors = require('cors');

const isDevMode = process.env.NODE_ENV === 'development';

const mongoDBUri = isDevMode ? process.env.MONGODB_DEV_URI : process.env.MONGODB_URI;
const indexRouter = require('./routes');
const apiRouter = require('./routes/api');
const bodyParser = require('body-parser');

const app = express();

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason);
  process.exit(1);
});

mg.connect(mongoDBUri, { useNewUrlParser: true });
mg.connection
  .once('open', () => {
    console.info('***: Mongo open :***');
    app.use(cors());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/', indexRouter);
    app.use('/', apiRouter);
  })
  .on('error', error => console.warn('Error', error));




module.exports = app;
