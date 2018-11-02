const Review = require('../schemes/reviewSchema');

const requestOnGetReviewsByShoesId = shoesId => Review.find({shoesId: shoesId});
const requestOnAddReview = (review) => new Review(review).save();

module.exports = {
    requestOnGetReviewsByLogin,
    requestOnAddReview
}