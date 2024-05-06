const mainRoute = require("express").Router();

mainRoute.get("/", (req, res) => {
    res.status(200).send("Main Route")
})

module.exports = mainRoute;