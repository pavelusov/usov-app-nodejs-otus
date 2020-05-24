const mg = require('mongoose');

mg.connect(process.env.MONGODB_TEST_URI, { useNewUrlParser: true });

mg.connection
  .once('open', () => console.log('Mongo open'))
  .on('error', error => console.warn('Error', error));