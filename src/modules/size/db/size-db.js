const Size = require('../../../schemes/sizeSchema');

const requestOnGetSizesByShoesId = shoesId => Size.find({shoesId: shoesId});

module.exports = {
  requestOnGetSizesByShoesId,
}