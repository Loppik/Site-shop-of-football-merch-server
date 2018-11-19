const reviewRequest = require('../db/review');
const { requestOnGetUserById, findUserByLogin } = require('../db/users');
const guestRequest = require('../db/guests');

const getReviewByShoesId = shoesId => {
  return reviewRequest.requestOnGetReviewsByShoesId(shoesId).then((reviews) => reviews.length != 0 ? (
    reviews
  ) : (
      Promise.reject('no reviews')
    ))
}

const addReview = async review => {
  if (review.userId) {
    const user = await requestOnGetUserById(review.userId);
    review.login = user.login;
  } else {
    const guest = await guestRequest.getGuest();
    console.log(guest);
    review.login = guest.login + guest.number;
    await guestRequest.updateGuestNumber(guest.number + 1);
  }
  return reviewRequest.requestOnAddReview(review);
}

module.exports = {
  getReviewByShoesId,
  addReview,
}