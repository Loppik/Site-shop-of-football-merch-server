const reviewService = require('../services/review-service');
const reviewRequest = require('../db/review-db');

const getReviewByShoesId = (req, res) => {
  reviewRequest.getReviewByShoesId(req.params.shoesId)
    .then((reviews) => {
      res.send({
        reviews
      });
    })
    .catch((err) => {
      res.send({ err });
    })
};

const addReview = (req, res) => {
  reviewService.addReview(req.body)
    .then(review => {
      res.send({
        review
      })
    })
    .catch(err => {
      res.send({ err })
    })
};

module.exports = {
  getReviewByShoesId,
  addReview,
};