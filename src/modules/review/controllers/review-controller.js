const reviewService = require('../services/review-service');
const reviewRequest = require('../db/review-db');

const getReviewsByShoesId = (req, res) => {
  reviewRequest.getReviewsByShoesId(req.params.shoesId)
    .then((reviews) => {
      res.send(reviews);
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
};

const addReview = (req, res) => {
  reviewService.addReview(req.body)
    .then((review) => {
      res.send({
        review
      })
    })
    .catch(err => {
      res.status(500).send({ err })
    })
};

module.exports = {
  getReviewsByShoesId,
  addReview,
};