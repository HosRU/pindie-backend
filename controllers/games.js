const sendAllGames = (req, res) => {
    res.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.gamesArray))
}

const sendCreateGame = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.game))
}

module.exports = {sendAllGames, sendCreateGame}