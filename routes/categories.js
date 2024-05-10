const categoriesRouter = require("express").Router();

const findAllCategories = require("../middlewares/categories");
const sendAllCategories = require("../controllers/categories");

const createCategory = require("../middlewares/categories");
const sendCreateCategory = require('../controllers/categories');

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, createCategory, sendCreateCategory);

module.exports = categoriesRouter;