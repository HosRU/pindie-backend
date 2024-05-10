const usersRouter = require("express").Router();

const findAllUsers = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

const createUser = require("../middlewares/users");
const sendCreateUser = require("../controllers/users");

const findUserId = require("../middlewares/users");
const sendUserId = require("../controllers/users");

const updateUser = require("../middlewares/users");
const sendUpdateUser = require("../controllers/users");

const deleteUser = require("../middlewares/users");
const sendDeleteUser = require("../controllers/users");

usersRouter.get("/users", findAllUsers, sendAllUsers);
usersRouter.post("/users", findAllUsers, createUser, sendCreateUser);
usersRouter.get("/users/:id", findUserId, sendUserId);
usersRouter.put("/users/:id", updateUser, sendUpdateUser);
usersRouter.delete("/users/:id", deleteUser, sendDeleteUser);

module.exports = usersRouter;