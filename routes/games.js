const gamesRouter = require("express").Router();

const {
  findAllGames,
  createGame,
  findGameId,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest
} = require("../middlewares/games");

const {
  sendAllGames,
  sendCreateGame,
  sendGameById,
  sendGameUpdate,
  sendDeleteGame
} = require("../controllers/games");

const {checkAuth} = require("../middlewares/checkAuth");

gamesRouter.get("/games", findAllGames, sendAllGames);
gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendCreateGame
);
gamesRouter.get("/games/:id", findGameId, sendGameById);
gamesRouter.put(
  "/games/:id",
  findGameId,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdate
);
gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendDeleteGame);

module.exports = gamesRouter;
