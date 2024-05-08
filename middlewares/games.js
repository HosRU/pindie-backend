const games = require("../models/game");

const findAllGames = async (req, res, next) => {
    req.gamesArray = await games.find({});
    next()
}

const createGame = async (req, res, next) => {
    console.log("POST /games")
    try{
        req.game = await games.create(req.body);
        next();
    } catch (error) {
        res.setHeader('Content-type', 'application/json')
        res.status(400).send(JSON.stringify({message: "Ошибка создания игры"}))
    }
}

module.exports = {findAllGames, createGame};