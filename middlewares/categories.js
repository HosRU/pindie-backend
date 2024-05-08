const categories = require("../models/category");

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({})
    next();
}

const createCategory = async (req, res, next) => {
    try{
        req.category = categories.create(req.body);
        next();
    } catch (error) {
        res.setHeader('Content-type', 'application/json');
        res.status(400).send(JSON.stringify({message: "Ошибка в создании категории"}))
    }
}

module.exports = findAllCategories;