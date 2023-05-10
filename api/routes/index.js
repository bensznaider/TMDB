const express = require("express");
const router = express.Router();
const users = require("./users.js");
const movies = require("./movies.js");
const series = require("./series.js")

router.use("/users", users);

router.use("/movies", movies);

router.use("/series", series);

module.exports = router;
