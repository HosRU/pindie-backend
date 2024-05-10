const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate("categories").populate({
    path: "users",
    select: "-password",
  });
  console.log(req.gamesArray);
  next();
};

const createGame = async (req, res, next) => {
  try {
    req.game = await games.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
  }
};

const findGameId = async (req, res, next) => {
  try {
    req.game = await games.findById(req.params.id).populate("categories").populate({
        path: "users",
        select: "-password",
      });
    next();
  } catch (error) {
    res.setHeader("Content-type", "application/json");
    res.status(404).send(JSON.stringify({ message: "Не удалось найти игру" }));
  }
};

const updateGame = async (req, res, next) => {
    try{
        req.game = games.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
    }
}

module.exports = findAllGames, createGame, findGameId, updateGame;
