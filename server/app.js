const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json);

app.use(cors());
app.use(helmet());
app.use(morgan("combined"));


app.use(require("./routes/auth.todo"));
app.use("/todo", require("./routes/todo.route"));

module.exports = app;
