const { requestOnGetAllShoesOfOneType, requestOnAddNewShoes, requestOnGetAllShoes, requestOnGetShoesById } = require('../db/products');

const getAllShoesOfOneType = (type) => {
    return requestOnGetAllShoesOfOneType(type).then((shoes) => shoes.length > 0 ? (
        {shoes}
    ): (
        Promise.reject('Getting products failed')
    ));
}

const addNewShoes = (shoes) => {
    return requestOnAddNewShoes(shoes).then((shoes) => {
        return {shoes};
    });
}

const getAllShoes = () => {
    return requestOnGetAllShoes().then((shoes) => shoes.length > 0 ? (
        {shoes}
    ) : (
        Promise.reject('No shoes')
    ));
}

const getShoesById = (id) => {
    return requestOnGetShoesById(id).then((shoes) => shoes ? (
        {shoes}
    ) : (
        Promise.reject('no shoes with this id')
    ))
}

module.exports = {
    getAllShoesOfOneType,
    addNewShoes,
    getAllShoes,
    getShoesById,
}