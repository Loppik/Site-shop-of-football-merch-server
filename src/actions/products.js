const {requestOnGetAllShoesOfOneType, requestOnAddNewShoes, requestOnGetAllShoes, requestOnGetShoesById, requestOnGetCategories} = require('../db/products');

function getAllShoesOfOneType(type) {
    return requestOnGetAllShoesOfOneType(type).then((shoes) => shoes.length > 0 ? (
        {shoes}
    ): (
        Promise.reject('Getting products failed')
    ));
}

function addNewShoes(shoes) {
    return requestOnAddNewShoes(shoes).then((shoes) => {
        return {shoes};
    });
}

function getAllShoes() {
    return requestOnGetAllShoes().then((shoes) => shoes.length > 0 ? (
        {shoes}
    ) : (
        Promise.reject('No shoes')
    ));
}

function getShoesById(id) {
    return requestOnGetShoesById(id).then((shoes) => shoes ? (
        {shoes}
    ) : (
        Promise.reject('no shoes with this id')
    ))
}

function getCategories() {
    return requestOnGetCategories().then((categories) => categories ? (
        categories
     ) : (
         Promise.reject('no categories')
     ))
}

module.exports = {
    getAllShoesOfOneType,
    addNewShoes,
    getAllShoes,
    getShoesById,
    getCategories
}