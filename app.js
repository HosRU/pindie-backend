const bodyParser = require("body-parser");
const http = require("http");
const routes = require("./routes/index");
const cors = require("./middlewares/cors");
const connectToDataBase = require("./database/connect")

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