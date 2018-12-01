const Order = require('../../../schemes/orderSchema');

const addOrder = (order) => new Order(order).save();

module.exports = {
  addOrder,
}