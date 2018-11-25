const app = require('express')();
const imageController = require('./controllers/image-controller');

app.get(/.*/, imageController.getImage);

module.exports = app;