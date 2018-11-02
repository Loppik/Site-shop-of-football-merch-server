const app = require('express')();
const review = require('../actions/review');

app.get('/:shoesId', (req, res) => {
    review.getReviewByShoesId(req.params.shoesId)
        .then((reviews) => {
            res.send({
                reviews
            });
        })
        .catch((err) => {
            res.send({err});
        })
});

app.post('/add', (req, res) => {
    review.addReview(req.body)
        .then(review => {
            res.send({
                review
            })   
        })
        .catch(err => {
            res.send({err})
        })
})

module.exports = app;