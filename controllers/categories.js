const sendAllCategories = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.categoriesArray))
};

const sendCreateCategory = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.category))
}

module.exports = {sendAllCategories, sendCreateCategory};