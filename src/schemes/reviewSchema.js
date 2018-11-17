const mongoose = require('../mongoose');

const reviewSchema = new mongoose.Schema({
    shoesId: String,
    login: String,
    text: String
  }, {
    timestamps: false
  });
  
const Review = mongoose.model('reviews', reviewSchema);

module.exports = Review;