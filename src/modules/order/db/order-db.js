const Order = require('../../../schemes/orderSchema');

const addOrder = order => new Order(order).save();

const getOrdersByUserId = userId => Order.find({ userId });

const getOrders = () => Order.find({});

module.exports = {
  addOrder,
  getOrdersByUserId,
  getOrders,
}