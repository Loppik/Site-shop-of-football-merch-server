const app = require('express')();
const jwt = require('jsonwebtoken');
const config = require('../../config');

app.use('/auth', require('./auth'));
app.use('/admin', require('./admin'));

app.use((req, res, next) => {
  const accessToken = req.get('Authorization');
  if (accessToken) {
    jwt.verify(accessToken, config.secret, (err, decoded) => { // create verify in jwtService
      if (err) {
        res.status(401).send({ err:  err.name })
      }
      req.body.userId = decoded.userId;
    })
  }
  next();
});

app.use('/categories', require('./categories'));
app.use('/shoes', require('./shoes'));
app.use('/review', require('./review'));
app.use('/sizes', require('./sizes'));
app.use('/images', require('./images'));
app.use('/users', require('./users'));

module.exports = app;