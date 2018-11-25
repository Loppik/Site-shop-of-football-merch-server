const sizeRequest = require('../db/size-db');

const getSizesByShoesId = shoesId => {
  return sizeRequest.requestOnGetSizesByShoesId(shoesId).then((sizes) => sizes.length != 0 ? (
    sizes
  ) : (
    Promise.reject('no available sizes')
  ))
}

module.exports = {
  getSizesByShoesId,
}