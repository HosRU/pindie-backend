const sendAllCategories = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.categoriesArray))
};

const sendCreateCategory = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.category))
}

const sendCategoryId = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.category));
}

const sendUpdateCategory = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.status(200).send(JSON.stringify({ message: "Категория обновлена" }));
}

const sendDeleteCategory = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.category));
}

module.exports = sendAllCategories, sendCreateCategory, sendCategoryId, sendUpdateCategory, sendDeleteCategory;