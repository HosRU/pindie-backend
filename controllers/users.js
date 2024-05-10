const sendAllUsers = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.usersArray));
}

const sendCreateUser = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.user));
}

const sendUserId = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify(req.user));
}

const sendUpdateUser = (req, res) => {
    res.setHeader('Content-type', 'application/json');
    res.status(200).send(JSON.stringify({ message: "Пользователь обновлен" }));
}

module.exports = sendAllUsers, sendCreateUser, sendUserId, sendUpdateUser;