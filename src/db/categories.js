const Category = require('../schemes/categorySchema');

const getCategories = () => Category.find({});

const addCategory = category => new Category(category).save();

const deleteCategory = categoryName => Category.deleteOne({ name: categoryName });

const updateCategoryById = category => Category.update({ _id: category._id }, { $set: { ...category } });

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
  updateCategoryById,
}