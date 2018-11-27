const sizeRequest = require('../db/size-db');

const getSizesByShoesId = (req, res) => {
  sizeRequest.getSizesByShoesId(req.params.shoesId)
    .then((sizes) => {
      res.send({ sizes })
    })
    .catch((err) => {
      res.status(500).send({ err })
    })
};

module.exports = {
  getSizesByShoesId,
};