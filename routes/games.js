const gamesRoute = require("express").Router();

const findAllGames = require("../middlewares/game");
const sendAllGames = require("../controllers/games");

gamesRoute.get("/games", findAllGames, sendAllGames);

module.exports = gamesRoute;