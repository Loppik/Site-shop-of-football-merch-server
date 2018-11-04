const reviewRequest = require('../db/review')

const getReviewByShoesId = shoesId => {
    return reviewRequest.requestOnGetReviewsByShoesId(shoesId).then((reviews) => reviews.length != 0 ? (
        reviews
    ) : (
        Promise.reject('no reviews')
    ))
}

const addReview = review => reviewRequest.requestOnAddReview(review)

module.exports = {
    getReviewByShoesId,
    addReview
}