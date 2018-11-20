const categoryRequest = require('../db/categories');
const { isInvalidCategory } = require('../validation/category');

const getCategories = () => {
  return categoryRequest.getCategories().then((categories) => categories ? (
    categories
  ) : (
      Promise.reject('no categories')
    ))
}

const addCategory = (category) => {
  return isInvalidCategory(category).then(() => {
    category.routeName = category.name.replace(/\s/g, '');
    return categoryRequest.addCategory(category);
  }, (err) => {
    return Promise.reject(err);
  })
}

const deleteCategory = (categoryName) => categoryRequest.deleteCategory(categoryName);


module.exports = { 
  getCategories,
  addCategory,
  deleteCategory,
};
