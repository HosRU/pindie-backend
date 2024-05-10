const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
    req.usersArray = await users.find({});
    next();
}

const createUser = async (req, res, next) => {
    try{
        req.user = await users.create(req.body);
        next();
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send(JSON.stringify({message: "Ошибка создания пользователя"}))
    }
}

const findUserId = async (req, res, next) => {
    try{
        req.user = await users.findById(req.params.id);
        next();
    } catch (error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send(JSON.stringify({message: "Не удалось найти пользователя"}));
    }
}

const updateUser = async (req, res, next) => {
    try{
        req.user = await users.findByIdAndUpdate(req.params.id, req.body);
        next();
    } catch(error) {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send(JSON.stringify({message: "Не удалось обновить пользователя"}));
    }
}

const deleteUser = async (req, res, next) => {
    try{
        req.user = await users.findByIdAndDelete(req.params.id);
        next();
    } catch (error){
        res.setHeader('Content-Type', 'application/json');
        res.status(404).send(JSON.stringify({message: "Не удалось удалить пользователя"}));
    }
}

module.exports = findAllUsers, createUser, findUserId, updateUser, deleteUser;
