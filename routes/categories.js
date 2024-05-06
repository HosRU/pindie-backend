const categoriesRoute = require("express").Router();

const findAllCategories = require("../middlewares/categories");
const sendAllCategories = require("../controllers/categories");

categoriesRoute.get("/categories", findAllCategories, sendAllCategories);

module.exports = categoriesRoute;