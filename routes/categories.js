const categoriesRouter = require("express").Router();

const findAllCategories = require("../middlewares/categories");
const sendAllCategories = require("../controllers/categories");

const createCategory = require("../middlewares/categories");
const sendCreateCategory = require('../controllers/categories');

const findCategoryById = require("../middlewares/categories");
const sendCategoryId = require("../controllers/categories");

const updateCategory = require("../middlewares/categories");
const sendUpdateCategory = require("../controllers/categories");

const deleteCategories = require("../middlewares/categories");
const sendDeleteCategory = require("../controllers/categories");

const checkIsCategoryExists = require("../middlewares/categories");
const checkEmptyName = require("../middlewares/categories");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, createCategory, sendCreateCategory);
categoriesRouter.get("categories/:id", findCategoryById, sendCategoryId);
categoriesRouter.put("categories/:id", updateCategory, sendUpdateCategory);
categoriesRouter.delete("categories/:id", deleteCategories, sendDeleteCategory);

module.exports = categoriesRouter;