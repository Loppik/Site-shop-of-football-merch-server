const sizeRequest = require('../db/size-db');

const reduceCountOfSizesByOne = async (data) => {
  const count = await sizeRequest.getCountOfSizeByShoesId(data);
  console.log(data)
  return sizeRequest.setCountOfSize(data.shoesId, data.size, count - 1);
};

module.exports = {
  reduceCountOfSizesByOne,
}