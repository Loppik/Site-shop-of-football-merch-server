const app = require('express')();
const shoesController = require('./controllers/shoes-controller');

app.get('/ct/:ctRouteName', shoesController.getAllShoesOfOneType);
app.get('/:id', shoesController.getShoesById);
app.post('/', shoesController.addShoes);
app.delete('/:shoesId', shoesController.deleteShoesById);
app.put('/', shoesController.updateShoesById);
app.get('/', shoesController.getAllShoes);

module.exports = app;
