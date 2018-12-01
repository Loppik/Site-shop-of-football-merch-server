const Size = require('../../../schemes/sizeSchema');

const getSizesByShoesId = shoesId => Size.find({ shoesId });

const getCountOfSizeByShoesId = async ({shoesId, size}) => { 
  const s = await Size.findOne({ shoesId, size });
  return s.count;
};

const setCountOfSize = (shoesId, size, count) => Size.update({ shoesId, size }, { $set: { count } });

module.exports = {
  getSizesByShoesId,
  getCountOfSizeByShoesId,
  setCountOfSize,
}