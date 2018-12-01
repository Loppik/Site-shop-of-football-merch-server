const app = require('express')();
const sizeController = require('./controllers/size-controller');

app.get('/:shoesId', sizeController.getSizesByShoesId);
app.post('/', sizeController.reduceSizesCountByOne);

module.exports = app;