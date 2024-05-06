const gamesRoute = require("express").Router();

gamesRoute.get("/games", (req, res) => {
    res.status(200).send("Games Route")
})

module.exports = gamesRoute;