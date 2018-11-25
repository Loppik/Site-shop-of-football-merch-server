const categoryRequest = require('../db/category-db');
const categoryValidation = require('../../../validation/category');

const addCategory = (category) => {
  return categoryValidation.isInvalidCategory(category).then(() => {
    category.routeName = category.name.replace(/\s/g, '');
    return categoryRequest.addCategory(category);
  }, (err) => {
    return Promise.reject(err);
  })
}

module.exports = {
  addCategory,
};
