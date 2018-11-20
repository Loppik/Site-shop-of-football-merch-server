const Shoes = require('../schemes/shoesSchema');

const getAllShoesOfOneType = type => Shoes.find({'type': type});

const addShoes = shoes => new Shoes(shoes).save();

const getAllShoes = () => Shoes.find({});

const getShoesById = id => Shoes.findOne({_id: id});

const deleteShoesById = id => Shoes.deleteOne({ _id: id });

module.exports = {
    getAllShoesOfOneType,
    addShoes,
    getAllShoes,
    getShoesById,
    deleteShoesById,
}