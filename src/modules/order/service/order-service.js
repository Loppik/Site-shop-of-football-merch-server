const orderRequest = require('../db/order-db');
const sizeService = require('../../size/services/size-service');

const addOrder = (order) => {
  order.shoes.forEach(async (sh) => {
    await sizeService.reduceCountOfSizesByOne(sh);
  });
  return orderRequest.addOrder(order);
}

module.exports = {
  addOrder,
}