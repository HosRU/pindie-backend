const cors = require("cors");
const bodyParser = require("body-parser");
const http = require("http");

const PORT = 3000;
const server = http.createServer(() => {
    console.log("К вам ппишел сервер")
})

server.listen(PORT)