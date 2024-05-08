const gamesRoute = require("express").Router();

const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

const createGame = require("../middlewares/games")
const sendCreateGame = require("../controllers/games");

gamesRoute.get("/games", findAllGames, sendAllGames);
gamesRoute.post("/games", findAllGames, createGame, sendCreateGame);

module.exports = gamesRoute;