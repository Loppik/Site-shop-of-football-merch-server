const app = require('express')();
const { getCategories, addCategory, deleteCategory } = require('../actions/categories');

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

module.exports = app;
