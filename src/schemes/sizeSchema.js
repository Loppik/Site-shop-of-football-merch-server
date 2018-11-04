const mongoose = require('../mongoose');

const sizeSchema = new mongoose.Schema({
    shoesId: String,
    size: Number,
    count: Number,
  }, {
    timestamps: false,
  });
  
const Size = mongoose.model('sizes', sizeSchema);

module.exports = Size;