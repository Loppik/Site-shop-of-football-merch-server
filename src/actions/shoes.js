const shoesRequest = require('../db/shoes');

const getAllShoesOfOneType = (type) => {
  return shoesRequest.getAllShoesOfOneType(type).then((shoes) => shoes.length > 0 ? (
    { shoes }
  ) : (
      Promise.reject('Getting products failed')
    ));
}

const addShoes = shoes => shoesRequest.addShoes(shoes);

const getAllShoes = () => {
  return shoesRequest.getAllShoes().then((shoes) => shoes.length > 0 ? (
    { shoes }
  ) : (
      Promise.reject('No shoes')
    ));
}

const getShoesById = (id) => {
  return shoesRequest.getShoesById(id).then((shoes) => shoes ? (
    { shoes }
  ) : (
      Promise.reject('no shoes with this id')
    ))
}

const deleteShoesById = id => shoesRequest.deleteShoesById(id);

const updateShoesById = shoes => shoesRequest.updateShoesById(shoes);

module.exports = {
  getAllShoesOfOneType,
  addShoes,
  getAllShoes,
  getShoesById,
  deleteShoesById,
  updateShoesById,
}