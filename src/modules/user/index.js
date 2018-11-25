const app = require('express')();
const userController = require('./controllers/user-controller');

app.get('/', userController.getUserById);

module.exports = app;
