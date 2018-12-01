const mongoose = require('../mongoose');

const orderSchema = new mongoose.Schema({
    userId: String,
    phoneNumber: Number,
    email: String,
    address: String,
    shoes: Array,
    wishes: String,
    price: Number,
    orderDate: Date,
    status: String,
  }, {
    timestamps: false,
  });
  
const Order = mongoose.model('orders', orderSchema);

module.exports = Order;