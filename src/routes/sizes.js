const app = require('express')();
const sizes = require('../actions/sizes');

app.get('/:shoesId', (req, res) => {
  sizes.getSizesByShoesId(req.params.shoesId)
    .then((sizes) => {
      res.send({
        sizes,
      })
    })
    .catch((err) => {
      res.send({err})
    })
})

module.exports = app;