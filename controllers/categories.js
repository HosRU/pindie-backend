const sendAllCategories = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.categoriesArray));
};

const sendCreateCategory = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const sendCategoryId = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const sendUpdateCategory = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end({ message: "Категория обновлена" });
};

const sendDeleteCategory = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

module.exports = sendAllCategories,
  sendCreateCategory,
  sendCategoryId,
  sendUpdateCategory,
  sendDeleteCategory
