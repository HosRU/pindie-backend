const games = require("../models/game");

const findAllGames = (req, res, next) => {
    req.gamesArray = find({});
    next()
}

module.exports = findAllGames;