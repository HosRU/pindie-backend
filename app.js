const bodyParser = require("body-parser");
const cors = require("./middlewares/cors");
const connectToDataBase = require("./database/connect");
const express = require("express");
const path = require("path");
const usersRouter = require('./routes/users');
const gamesRouter = require('./routes/games');
const categoriesRouter = require('./routes/categories');

const PORT = 3000;
const app = express();

connectToDataBase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    usersRouter,
    gamesRouter,
    categoriesRouter
)

app.listen(PORT)