const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
}

const createUser = async (req, res, next) => {
    try{
        req.user = users.create(req.body);
        next();
    } catch (error) {
        res.setHeader('Content-type', 'application/json');
        res.status(400).send(JSON.stringify({message: "Ошибка создания пользователя"}))
    }
}

module.exports = findAllUsers;