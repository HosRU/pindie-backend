const sendAllGames = (req, res) => {
    req.setHeader('Content-type', 'application/json')
    res.end(JSON.stringify(req.gamesArray))
}

module.exports = sendAllGames;