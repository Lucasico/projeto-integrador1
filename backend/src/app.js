require("reflect-metadata");
require("./database/postgresConnection");

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { router } = require("./routes");

const app = express();

app.use(cors());
app.use(express.json());
//morgan HTTP request logger middleware for node.js
app.use(morgan("tiny"));
app.use(router);
//config show image
app.use("/uploads", express.static(path.join(__dirname, "..", "uploads")));
module.exports = { app };
