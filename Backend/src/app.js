const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

module.exports = { app };
