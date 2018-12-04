const shoesRequest = require('../db/shoes-db');
const categoryRequest = require('../../category/db/category-db');

const getAllShoesOfOneType = async (routeName) => {
  const category = await categoryRequest.getCategoryByRouteName(routeName);
  return shoesRequest.getAllShoesOfOneType(category.name);
}

module.exports = {
  getAllShoesOfOneType,
}