const app = require('express')();
const orderController = require('./controllers/order-controller');

app.post('/', orderController.addOrder);

module.exports = app;