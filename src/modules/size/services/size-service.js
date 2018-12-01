const sizeRequest = require('../db/size-db');

const getSizesByShoesId = async shoesId => {
  const sizes = await sizeRequest.getSizesByShoesId(shoesId);
  return sizes.filter(size => size.count > 0);
}

const reduceCountOfSizesByOne = async (data) => {
  const count = await sizeRequest.getCountOfSizeByShoesId(data);
  console.log(data)
  return sizeRequest.setCountOfSize(data.shoesId, data.size, count - 1);
};

module.exports = {
  getSizesByShoesId,
  reduceCountOfSizesByOne,
}