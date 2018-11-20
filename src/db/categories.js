const Category = require('../schemes/categorySchema');

const getCategories = () => {
  return Category.find({});
}

const addCategory = (category) => {
  return new Category(category).save();
}

module.exports = {
  getCategories,
  addCategory,
}