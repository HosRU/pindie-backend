const gamesRoute = require("express").Router();

const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

const createGame = require("../middlewares/games");
const sendCreateGame = require("../controllers/games");

const findGameId = require("../middlewares/games");
const sendGameById = require("../controllers/games");

const updateGame = require("../middlewares/games");
const sendGameUpdate = require("../controllers/games");

gamesRoute.get("/games", findAllGames, sendAllGames);
gamesRoute.post("/games", findAllGames, createGame, sendCreateGame);
gamesRoute.get("/games/:id", findGameId, sendGameById);
gamesRoute.put("/games/:id", updateGame, sendGameUpdate);

module.exports = gamesRoute;