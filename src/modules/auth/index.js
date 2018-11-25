const app = require('express')();

const authController = require('./controllers/auth-controller')

app.post('/reg', authController.registration);
app.post('/login', authController.login);
app.post('/refresh', authController.refreshToken);

module.exports = app;