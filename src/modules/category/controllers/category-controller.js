const categoryService = require('../services/category-service');

const getCategories = (req, res) => {
    categoryService.getCategories()
    .then((categories) => {
      res.send({
        categories
      });
    })
    .catch((err) => {
      res.send({ err });
    })
};

const addCategory = (req, res) => {
    categoryService.addCategory(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.send({ err });
    })
};

const deleteCategory = (req, res) => {
    categoryService.deleteCategory(req.body.name)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.send({ err })
    })
};

const updateCaregoryById = (req, res) => {
    categoryService.updateCategoryById(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
};

module.exports = {
  getCategories,
  addCategory,
  deleteCategory,
  updateCaregoryById,
}
