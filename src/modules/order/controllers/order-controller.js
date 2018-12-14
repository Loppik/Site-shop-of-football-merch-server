const orderRequest = require('../db/order-db');
const orderService = require('../service/order-service');

const addOrder = (req, res) => {
  orderService.addOrder(req.body)
    .then((order) => {
      res.send({ order });
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
}

const getOrdersByUserId = (req, res) => {
  orderRequest.getOrdersByUserId(req.body.userId)
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
}

const getOrders = (req, res) => {
  orderRequest.getOrders()
    .then((orders) => {
      res.send(orders);
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
}

module.exports = {
  addOrder,
  getOrdersByUserId,
  getOrders,
}