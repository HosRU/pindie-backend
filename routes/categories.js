const categoriesRoute = require("express").Router();

categoriesRoute.get("/categories", (req, res) => {
    res.status(200).send("Categories Route")
})

module.exports = categoriesRoute;