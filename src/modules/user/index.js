const app = require('express')();
const userController = require('./controllers/user-controller');

app.get('/', userController.getUserById);
app.put('/', userController.updateUser)

module.exports = app;
