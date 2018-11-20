const app = require('express')();
const { getCategories, addCategory } = require('../actions/categories');

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

app.post('/add', (req, res) => {
  addCategory(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.send({ err });
    })
});

module.exports = app;
