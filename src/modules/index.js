const app = require('express')();
const jwt = require('jsonwebtoken');
const config = require('../../config');
const { parseToken } = require('./token');

app.use('/auth', require('./auth'));

app.use(parseToken);

app.use('/categories', require('./category'));
app.use('/shoes', require('./shoes'));
app.use('/review', require('./review'));
app.use('/sizes', require('./size'));
app.use('/images', require('./image'));
app.use('/users', require('./user'));

module.exports = app;