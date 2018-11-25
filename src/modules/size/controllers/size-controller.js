const sizeService = require('../services/size-service');

const getSizesByShoesId = (req, res) => {
    sizeService.getSizesByShoesId(req.params.shoesId)
    .then((sizes) => {
      res.send({
        sizes,
      })
    })
    .catch((err) => {
      res.send({err})
    })
};

module.exports = {
  getSizesByShoesId,
};