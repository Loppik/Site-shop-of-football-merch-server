const app = require('express')();
const orderController = require('./controllers/order-controller');

app.post('/', orderController.addOrder);
app.get('/', orderController.getOrdersByUserId);

module.exports = app;