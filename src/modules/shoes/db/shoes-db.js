const Shoes = require('../../../schemes/shoesSchema');

const getAllShoesOfOneType = type => Shoes.find({ 'type': type });

const addShoes = shoes => new Shoes(shoes).save();

const getAllShoes = () => Shoes.find({});

const getShoesById = id => Shoes.findOne({ _id: id });

const deleteShoesById = id => Shoes.deleteOne({ _id: id });

const updateShoesById = shoes => Shoes.update({ _id: shoes._id }, { $set: { ...shoes } })

module.exports = {
  getAllShoesOfOneType,
  addShoes,
  getAllShoes,
  getShoesById,
  deleteShoesById,
  updateShoesById,
}