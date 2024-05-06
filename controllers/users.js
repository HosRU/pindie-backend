const sendAllUsers = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.usersArray))
}

module.exports = sendAllUsers;