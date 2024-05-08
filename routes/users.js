const usersRoute = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

const createUser = require("../middlewares/users");
const sendCreateUser = require("../controllers/users");

usersRoute.get("/users", findAllUsers, sendAllUsers);
usersRoute.post("/users", findAllUsers, createUser, sendCreateUser);

module.exports = usersRoute;