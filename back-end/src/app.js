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

const app = express();

mg.connect(mongoDBUri, { useNewUrlParser: true });
mg.connection
  .once('open', () => console.info('***: Mongo open :***'))
  .on('error', error => console.warn('Error', error));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/', apiRouter);


module.exports = app;
