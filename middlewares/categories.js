const categories = reqiure("../models/categories");

const findAllCategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({})
    next();
}

module.exports = findAllCategories;