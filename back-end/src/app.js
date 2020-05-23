const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mg = require('mongoose');

const isDevMode = process.env.MODE === 'development';

const mongoDBUri = isDevMode ? process.env.MONGODB_DEV_URI : process.env.MONGODB_URI;
const indexRouter = require('./routes');
const apiRouter = require('./routes/api');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mg.connect(mongoDBUri, { useNewUrlParser: true });
mg.connection
  .once('open', () => {
    console.info('***: Mongo open :***');
    app.use('/', indexRouter);
    app.use('/', apiRouter);
  })
  .on('error', error => console.warn('Error', error));

module.exports = app;
