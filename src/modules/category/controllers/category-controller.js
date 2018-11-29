const categoryService = require('../services/category-service');
const categoryRequest = require('../db/category-db');

const getCategories = (req, res) => {
  categoryRequest.getCategories()
    .then((categories) => {
      res.send({ categories });
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
};

const addCategory = (req, res) => {
  categoryService.addCategory(req.body)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.status(500).send({ err });
    })
};

const deleteCategory = (req, res) => {
  categoryRequest.deleteCategory(req.params.categoryId)
    .then((category) => {
      res.send({});
    })
    .catch((err) => {
      res.status(200).send({ err })
    })
};

const updateCaregoryById = (req, res) => {
  categoryRequest.updateCategoryById(req.body)
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
