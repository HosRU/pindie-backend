const gamesRouter = require("express").Router();

const {findAllGames} = require("../middlewares/games");
const sendAllGames = require("../controllers/games");

const {createGame} = require("../middlewares/games");
const sendCreateGame = require("../controllers/games");

const {findGameId} = require("../middlewares/games");
const sendGameById = require("../controllers/games");

const {updateGame} = require("../middlewares/games");
const sendGameUpdate = require("../controllers/games");

const {deleteGame} = require("../middlewares/games");
const sendDeleteGame = require("../controllers/games");

const {checkEmptyFields} = require("../middlewares/games");
const {checkIfCategoriesAvaliable} = require("../middlewares/games");
const {checkIfUsersAreSafe} = require("../middlewares/games");
const {checkIsGameExists} = require("../middlewares/games");

const {checkAuth} = require("../middlewares/checkAuth");
const {checkIsVoteRequest} = require("../middlewares/games");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post("/games", findAllGames, checkIsGameExists, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, createGame, sendCreateGame);
gamesRouter.get("/games/:id", findGameId, sendGameById);
gamesRouter.put("/games/:id", findGameId, checkIsVoteRequest, checkIfUsersAreSafe, checkIfCategoriesAvaliable, checkEmptyFields, checkAuth, updateGame, sendGameUpdate);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendDeleteGame)

module.exports = gamesRouter;