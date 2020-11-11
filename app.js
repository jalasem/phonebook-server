const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const { dbURL } = require("./utils/config");
const personRouter = require("./controllers/person");
const middlewares = require("./utils/middlewares");

require("dotenv").config();

const app = express();

mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});
const db = mongoose.connection

db.on('error', err => console.error(err))
db.once('open', () => console.log('DB Connected 🚀'))

morgan.token("body", (req) => JSON.stringify(req.body));

app.use(cors());
app.use(express.static("build"));
app.use(express.json());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms :body")
);


app.use('/api/persons', personRouter)
app.all(middlewares.unknownEndpoint)

module.exports = app
