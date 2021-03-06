const reviewRequest = require('../db/review-db');
const userRequest = require('../../user/db/user-db');
const guestRequest = require('../../user/db/guest-db');

const addReview = async review => {
  if (review.userId) {
    const user = await userRequest.getUserById(review.userId);
    review.login = user.login;
  } else {
    const guest = await guestRequest.getGuest();
    review.login = guest.login + guest.number;
    await guestRequest.updateGuestNumber(guest.number + 1);
  }
  return reviewRequest.addReview(review);
}

module.exports = {
  addReview,
}