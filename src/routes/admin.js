const app = require('express')();
const {addNewShoes, getAllShoes} = require('../actions/shoes')

app.post('/addShoes', (req, res) => {
    addNewShoes(req.body)
        .then((shoes) => {
            res.send({
                shoes
            });
        })
        .catch((err) => {
            res.send({msg: err});
        })
});

app.get('/allShoes', (req, res) => {
    getAllShoes()
        .then((shoes) => {
            res.send({
                shoes
            });
        })
        .catch((err) => {
            res.send({msg: err});
        })
});

module.exports = app;