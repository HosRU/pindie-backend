const authRouter = require("express").Router();
const {auth} = require("../controllers/auth");

authRouter.post("/auth/login", auth)

module.exports = authRouter;