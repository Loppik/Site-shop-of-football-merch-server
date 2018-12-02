const Order = require('../../../schemes/orderSchema');

const addOrder = order => new Order(order).save();

const getOrdersByUserId = userId => Order.find({ userId });

module.exports = {
  addOrder,
  getOrdersByUserId,
}