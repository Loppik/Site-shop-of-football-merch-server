const Shoes = require('../schemes/shoesSchema');

const requestOnGetAllShoesOfOneType = (type) => {
    return Shoes.find({'type': type});
}

const requestOnAddNewShoes = (shoes) => {
    return new Shoes(shoes).save();
}

const requestOnGetAllShoes = () => {
    return Shoes.find({});
}

const requestOnGetShoesById = (id) => {
    return Shoes.findOne({_id: id});
}

module.exports = {
    requestOnGetAllShoesOfOneType,
    requestOnAddNewShoes,
    requestOnGetAllShoes,
    requestOnGetShoesById,
}