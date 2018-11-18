const Category = require('../schemes/categorySchema');

const requestOnGetCategories = () => {
  return Category.find({});
}

module.exports = {
  requestOnGetCategories,
}