const Shoes = require('../schemes/shoesSchema');
const Category = require('../schemes/categorySchema');

function requestOnGetAllShoesOfOneType(type) {
    return Shoes.find({'type': type});
}

function requestOnAddNewShoes(shoes) {
    return new Shoes(shoes).save();
}

function requestOnGetAllShoes() {
    return Shoes.find({});
}

function requestOnGetShoesById(id) {
    return Shoes.findOne({_id: id});
}

function requestOnGetCategories() {
    return Category.find({});
}

module.exports = {
    requestOnGetAllShoesOfOneType,
    requestOnAddNewShoes,
    requestOnGetAllShoes,
    requestOnGetShoesById,
    requestOnGetCategories,
}