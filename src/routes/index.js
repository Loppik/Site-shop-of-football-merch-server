const app = require('express')();

app.use('/auth', require('./auth'));
app.use('/products', require('./products'));
app.use('/admin', require('./admin'));
app.use('/review', require('./review'));
app.use('/sizes', require('./sizes'));

module.exports = app;