const shoesRequest = require('../db/shoes-db');


const getAllShoesOfOneType = (req, res) => {
  shoesRequest.getAllShoesOfOneType('ForRun')
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
  shoesRequest.getShoesById(req.params.id)
    .then((shoes) => {
      res.send({
        shoes: shoes.shoes
      })
    })
    .catch((err) => {
      res.send({ err })
    })
};

const addShoes = (req, res) => {
  shoesRequest.addShoes(req.body)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const deleteShoesById = (req, res) => {
  shoesRequest.deleteShoesById(req.body.shoesId)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const updateShoesById = (req, res) => {
  shoesRequest.updateShoesById(req.body)
    .then((shoes) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const getAllShoes = (req, res) => {
  shoesRequest.getAllShoes()
    .then((shoes) => {
      res.send({
        shoes
      });
    })
    .catch((err) => {
      res.send({ msg: err });
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