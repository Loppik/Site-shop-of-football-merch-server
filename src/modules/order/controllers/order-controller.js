const orderService = require('../service/order-service');

const addOrder = (req, res) => {
  orderService.addOrder(req.body)
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