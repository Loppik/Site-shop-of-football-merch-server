const shoesRequest = require('../db/shoes-db');
const shoesService = require('../services/shoes-service');


const getAllShoesOfOneType = (req, res) => {
  shoesService.getAllShoesOfOneType(req.params.ctRouteName)
    .then((shoes) => {
      res.send({ shoes })
    })
    .catch((err) => {
      res.status(500).send({ err });
    });
};

const getShoesById = (req, res) => {
  shoesRequest.getShoesById(req.params.id)
    .then((shoes) => {
      res.send({ shoes })
    })
    .catch((err) => {
      res.status(500).send({ err })
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
  shoesRequest.deleteShoesById(req.params.shoesId)
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
      res.send({ shoes });
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
};

const getAllShoesByRegExpName = (req, res) => {
  shoesRequest.getAllShoesByRegExpName(new RegExp(req.params.search))
    .then((shoes) => {
      res.send({ shoes });
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
}


module.exports = {
  getAllShoesOfOneType,
  getShoesById,
  addShoes,
  deleteShoesById,
  updateShoesById,
  addShoes,
  getAllShoes,
  getAllShoesByRegExpName,
}