const express = require('express');
const path = require('path');
const createError = require('http-errors');
const bodyParser = require('body-parser');
// const path = require('path');
const morgan = require('morgan');
const logger = require('./helpers/logger');
const mongoose = require('mongoose');
// const config = require('./helpers/config');
const homeRouter = require('./routes/home-router');
// const quizCi = require ('./models/quizCi');


/**
 * MongoDB setup CHANGE THIS PLEASE
 * 
 * mongodb://<dbuser>:<dbpassword>@ds115753.mlab.com:15753/nodequiz
 * 
 * mongoose.connect('mongodb://bilbo:baggins1@ds115753.mlab.com:15753/nodequiz',
 */
mongoose.connect('mongodb://bilbo:baggins1@ds115753.mlab.com:15753/nodequiz',
  {promiseLibrary: require('bluebird'), useNewUrlParser: true})
  .then(() => logger.debug('Connection to the MongoDB instance was successful'))
  .catch((err) => logger.debug('MongoDB Error: ' + err));

/**
 * Express
 */
let app = express();

/**
 * App: Setup
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false'}));
app.use(express.static(path.join(__dirname, '../dist/nodequiz')));
//gives express access to distributable folder...
app.use('/', express.static(path.join(__dirname, '../dist/nodequiz')));
app.use(morgan('dev'));

app.use('/api', homeRouter); // wires the homeController to localhost:3000/api



/**
 * Request handler
 */
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  logger.debug(err.message);

  res.status(err.status || 500);
  logger.debug(err.status);

  res.sendStatus(err.status);
});


homeRouter.get('/quizCi', function (req, res){
  console.log('Get request for quizCi')
});

module.exports = app;
