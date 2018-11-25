const app = require('express')();
const categoryController = require('./controllers/category-controller');

app.get('/', categoryController.getCategories);
app.post('/', categoryController.addCategory);
app.delete('/', categoryController.deleteCategory);
app.put('/', categoryController.updateCaregoryById);

module.exports = app;