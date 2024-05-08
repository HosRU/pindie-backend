const categoriesRoute = require("express").Router();

const findAllCategories = require("../middlewares/categories");
const sendAllCategories = require("../controllers/categories");

const createCategory = require("../middlewares/categories");
const sendCreateCategory = require('../controllers/categories');

categoriesRoute.get("/categories", findAllCategories, sendAllCategories);
categoriesRoute.post("/categories", findAllCategories, createCategory, sendCreateCategory);

module.exports = categoriesRoute;