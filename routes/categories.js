const categoriesRouter = require("express").Router();

const {findAllCategories,createCategory,findCategoryById,updateCategory,deleteCategories,checkIsCategoryExists,checkEmptyName} = require("../middlewares/categories");
const {sendAllCategories} = require("../controllers/categories");

const {sendCreateCategory} = require('../controllers/categories');

const {sendCategoryId} = require("../controllers/categories");

const {sendUpdateCategory} = require("../controllers/categories");

const {sendDeleteCategory} = require("../controllers/categories");

const {checkAuth} = require("../middlewares/checkAuth");

categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.post("/categories", findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCreateCategory);
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryId);
categoriesRouter.put("/categories/:id", findCategoryById, checkEmptyName, checkAuth, updateCategory, sendUpdateCategory);
categoriesRouter.delete("/categories/:id", checkAuth, deleteCategories, sendDeleteCategory);

module.exports = categoriesRouter;