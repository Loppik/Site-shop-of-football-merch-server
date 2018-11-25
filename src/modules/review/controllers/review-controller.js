const reviewService = require('../services/review-service');

const getReviewByShoesId = (req, res) => {
    reviewService.getReviewByShoesId(req.params.shoesId)
        .then((reviews) => {
            res.send({
                reviews
            });
        })
        .catch((err) => {
            res.send({err});
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
            res.send({err})
        })
};

module.exports = {
  getReviewByShoesId,
  addReview,
};