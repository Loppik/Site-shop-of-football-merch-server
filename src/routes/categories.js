const app = require('express')();
const { getCategories, addCategory, deleteCategory, updateCategoryById } = require('../actions/categories');

app.get('/', (req, res) => {
  getCategories()
    .then((categories) => {
      res.send({
        categories
      });
    })
    .catch((err) => {
      res.send({ err });
    })
})

app.post('/', (req, res) => {
  addCategory(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.send({ err });
    })
});

app.delete('/', (req, res) => {
  deleteCategory(req.body.name)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.send({ err })
    })
})

app.put('/', (req, res) => {
  updateCategoryById(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
})

module.exports = app;
