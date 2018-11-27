const Size = require('../../../schemes/sizeSchema');

const getSizesByShoesId = shoesId => Size.find({ shoesId: shoesId });

module.exports = {
  getSizesByShoesId,
}