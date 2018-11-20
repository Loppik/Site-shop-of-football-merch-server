const Category = require('../schemes/categorySchema');

const getCategories = () => Category.find({});

const addCategory = (category) => new Category(category).save();

const deleteCategory = (categoryName) => Category.deleteOne({ name: categoryName });

module.exports = {
  getCategories,
  addCategory,
  deleteCategory
}