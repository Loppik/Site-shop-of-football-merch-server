const app = require('express')();
const reviewController = require('./controllers/review-controller')

app.get('/:shoesId', reviewController.getReviewsByShoesId);
app.post('/add', reviewController.addReview);

module.exports = app;