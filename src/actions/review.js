const reviewRequest = require('../db/review');
const { requestOnGetUserById } = require('../db/users');

const getReviewByShoesId = shoesId => {
    return reviewRequest.requestOnGetReviewsByShoesId(shoesId).then((reviews) => reviews.length != 0 ? (
        reviews
    ) : (
        Promise.reject('no reviews')
    ))
}

const addReview = async review => {
    let user = await requestOnGetUserById(review.userId);
    review.login = user.login;
    return reviewRequest.requestOnAddReview(review);
}

module.exports = {
    getReviewByShoesId,
    addReview,
}