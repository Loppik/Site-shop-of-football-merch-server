const orderRequest = require('../db/order-db');

const addOrder = (req, res) => {
  orderRequest.addOrder(req.body)
    .then((order) => {
      res.send({});
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
}

module.exports = {
  addOrder,
}