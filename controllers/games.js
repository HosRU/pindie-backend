const sendAllGames = (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.gamesArray))
}

const sendCreateGame = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(req.game))
}

const sendGameById = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.game))
}

const sendGameUpdate = (req, res) => {
    res.setHeader("Content-type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
}

const sendDeleteGame = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.game))
}

module.exports = sendAllGames, sendCreateGame, sendGameById, sendGameUpdate, sendDeleteGame;