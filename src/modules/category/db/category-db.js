const Category = require('../../../schemes/categorySchema');

const getCategories = () => Category.find({});

const getCategory = categoryId => Category.findById(categoryId);

const addCategory = category => new Category(category).save();

const deleteCategory = categoryId => Category.deleteOne({ _id: categoryId });

const updateCategoryById = category => Category.update({ _id: category._id }, { $set: { ...category } });

module.exports = {
  getCategories,
  getCategory,
  addCategory,
  deleteCategory,
  updateCategoryById,
}