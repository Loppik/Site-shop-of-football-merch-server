const shoesService = require('../services/shoes-service');


const getAllShoesOfOneType = (req, res) => {
    shoesService.getAllShoesOfOneType('ForRun')
    .then((shoes) => {
      res.send({
        shoes: shoes.shoes,
      })
    })
    .catch((err) => {
      res.send({ msg: err, err: 'No shoes for run' })
    });
};

const getShoesById = (req, res) => {
    shoesService.getShoesById(req.params.id)
    .then((shoes) => {
      res.send({
        shoes: shoes.shoes
      })
    })
    .catch((err) => {
      res.send({ err })
    })
};

const addShoes =  (req, res) => {
    shoesService.addShoes(req.body)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const deleteShoesById = (req, res) => {
    shoesService.deleteShoesById(req.body.shoesId)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const updateShoesById = (req, res) => {
    shoesService.updateShoesById(req.body)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const getAllShoes = (req, res) => {
    shoesService.getAllShoes()
        .then((shoes) => {
        res.send({
        shoes
    });
})
.catch((err) => {
        res.send({msg: err});
})
};


module.exports = {
  getAllShoesOfOneType,
    getShoesById,
    addShoes,
    deleteShoesById,
    updateShoesById,
    addShoes,
    getAllShoes,
}