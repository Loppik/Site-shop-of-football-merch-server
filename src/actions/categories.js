const { requestOnGetCategories } = require('../db/categories');

const getCategories = () => {
  return requestOnGetCategories().then((categories) => categories ? (
      categories
   ) : (
       Promise.reject('no categories')
   ))
}

module.exports = { getCategories };
