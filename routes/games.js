const gamesRoute = require("express").Router();

const findAllGames = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

const createGame = require("../middlewares/games");
const sendCreateGame = require("../controllers/games");

const findGameId = require("../middlewares/games");
const sendGameById = require("../controllers/games");

const updateGame = require("../middlewares/games");
const sendGameUpdate = require("../controllers/games");

const deleteGame = require("../middlewares/games");
const sendDeleteGame = require("../controllers/games");

const checkEmptyFields = require("../middlewares/games");

gamesRoute.get("/games", findAllGames, sendAllGames);
gamesRoute.post("/games", findAllGames, checkEmptyFields, createGame, sendCreateGame);
gamesRoute.get("/games/:id", findGameId, sendGameById);
gamesRoute.put("/games/:id", updateGame, sendGameUpdate);
gamesRoute.delete("/games/:id", deleteGame, sendDeleteGame)

module.exports = gamesRoute;