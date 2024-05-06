const usersRoute = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

usersRoute.get("/users", findAllUsers, sendAllUsers);

module.exports = usersRoute;