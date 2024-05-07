const bodyParser = require("body-parser");
const routes = require("./routes/index");
const cors = require("./middlewares/cors");
const connectToDataBase = require("./database/connect");
const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

connectToDataBase();

app.use(
    cors,
    bodyParser.json(),
    express.static(path.join(__dirname, "public")),
    routes,
)

server.listen(PORT)