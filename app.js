const db = require("./models");
const express = require("express");
const cors = require("cors");
const app = express();
const router = require("./route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync();

app.use('/users', router);

module.exports = app