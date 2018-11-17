const app = require('express')();
const jwt = require('jsonwebtoken');
const config = require('../../config');
const jwtService = require('../jwtService');

app.use('/auth', require('./auth'));
app.use('/admin', require('./admin'));

app.use((req, res, next) => {
  const accessToken = req.get('Authorization');
  jwt.verify(accessToken, config.secret, (err, decoded) => {
    if (err) {
      res.status(401).send({ err:  err.name })
    }
    req.body.userId = decoded.userId;
  })
  next();
});

app.use('/products', require('./products'));
app.use('/review', require('./review'));
app.use('/sizes', require('./sizes'));

module.exports = app;