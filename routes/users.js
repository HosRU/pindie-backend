const usersRouter = require("express").Router();

const {findAllUsers} = require("../middlewares/users");
const sendAllUsers = require("../controllers/users");

const {createUser} = require("../middlewares/users");
const sendCreateUser = require("../controllers/users");

const {findUserId} = require("../middlewares/users");
const sendUserId = require("../controllers/users");

const {updateUser} = require("../middlewares/users");
const sendUpdateUser = require("../controllers/users");

const {deleteUser} = require("../middlewares/users");
const sendDeleteUser = require("../controllers/users");
const {checkEmptyNameAndEmail} = require("../middlewares/users");
const {checkEmptyNameAndEmailAndPassword} = require("../middlewares/users");
const {filterPassword} = require("../middlewares/users");
const {checkIsUserExists} = require("../middlewares/users");
const {hashPassword} = require("../middlewares/users");

const checkAuth = require("../middlewares/checkAuth");
const sendMe = require("../controllers/users");

usersRouter.get("/me", checkAuth, sendMe); 
usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.post("/users", findAllUsers, checkIsUserExists, checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendCreateUser);
usersRouter.get("/users/:id", findUserId, filterPassword, sendUserId);
usersRouter.put("/users/:id", findUserId, checkEmptyNameAndEmail, checkAuth, updateUser, sendUpdateUser);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendDeleteUser);

module.exports = usersRouter;