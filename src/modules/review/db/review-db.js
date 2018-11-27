const Review = require('../../../schemes/reviewSchema');

const getReviewsByShoesId = shoesId => Review.find({ shoesId: shoesId });
const addReview = review => new Review(review).save();

module.exports = {
  getReviewsByShoesId,
  addReview
}