const sizeService = require('../services/size-service');

const getSizesByShoesId = (req, res) => {
  sizeService.getSizesByShoesId(req.params.shoesId)
    .then((sizes) => {
      res.send({ sizes })
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

const reduceSizesCountByOne = (req, res) => {
  sizeService.reduceCountOfSizesByOne(req.body)
    .then((size) => {
      res.send({})
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
}

module.exports = {
  getSizesByShoesId,
  reduceSizesCountByOne,
};