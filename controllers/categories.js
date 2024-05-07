const sendAllCategories = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.categoriesArray))
};

module.exports = sendAllCategories;