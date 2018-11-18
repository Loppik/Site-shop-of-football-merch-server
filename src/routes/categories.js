const app = require('express')();
const {  } = require('../actions/categories');

app.get('/', (req, res) => {
  getCategories()
      .then((categories) => {
          res.send({
              categories
          });
      })
      .catch((err) => {
          res.send({err});
      })
})

module.exports = app;