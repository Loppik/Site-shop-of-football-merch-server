const app = require('express')();
const { getAllShoesOfOneType, getShoesById } = require('../actions/products');

app.get('/fb', (req, res) => {
    getAllShoesOfOneType('FootballBoots')
        .then((shoes) => {
            res.send({
                shoes: shoes.shoes,
            })
        })
        .catch((err) => {
            res.send({msg: err, err: 'No football boots'})
        });
});

app.get('/centipedes', (req, res) => {
    getAllShoesOfOneType('Сentipedes')
        .then((shoes) => {
            res.send({
                shoes: shoes.shoes,
            })
        })
        .catch((err) => {
            res.send({msg: err, err: 'No centipedes'})
        });
});

app.get('/forRun', (req, res) => {
    getAllShoesOfOneType('ForRun')
        .then((shoes) => {
            res.send({
                shoes: shoes.shoes,
            })
        })
        .catch((err) => {
            res.send({msg: err, err: 'No shoes for run'})
        });
});

app.get('/:id', (req, res) => {
    getShoesById(req.params.id)
        .then((shoes) => {
            res.send({
                shoes: shoes.shoes
            })
        })
        .catch((err) => {
            res.send({err})
        })
})


module.exports = app;