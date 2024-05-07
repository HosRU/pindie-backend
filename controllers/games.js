const sendAllGames = (req, res) => {
    req.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify(req.gamesArray))
}

module.exports = sendAllGames;