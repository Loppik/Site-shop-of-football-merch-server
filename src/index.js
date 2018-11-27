const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('./mongoose');
const passport = require('passport');

const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy; 
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const jwtsecret = 'mysecretkey';

const config = require('../config');

const app = express();

const User = require('./schemes/userSchema');
const Shoes = require('./schemes/shoesSchema');
const Review = require('./schemes/reviewSchema');

const routes = require('./modules/index');

//app.use(errorHandler);


app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.use(routes);

app.listen(config.port, () => {
  console.log(`listening on http://${config.host}:${config.port}`);
});

module.exports = app; 
