const mongoose = require('../mongoose');

const shoesSchema = new mongoose.Schema({
    name: String,
    description: String,
    type: String,
    price: Number,
  }, {
    timestamps: true
  });
  
const Shoes = mongoose.model('shoes', shoesSchema);

module.exports = Shoes;