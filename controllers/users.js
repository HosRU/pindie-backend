const sendAllUsers = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.userArray))
}

const sendCreateUser = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.user))
}

module.exports = {sendAllUsers, sendCreateUser}