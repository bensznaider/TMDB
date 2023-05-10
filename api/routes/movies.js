const express = require("express");
const movies = express.Router();
const axios = require("axios");
const { Favorites } = require("../db/models/index.js");

movies.post("/search", (req, res) => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/movie?query=${req.body.nombre}&include_adult=true&language=es&page=1`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmRkYjg5MTg1ODZhZGIzZGZmMjQ1NjY0ZDkyOGM2ZCIsInN1YiI6IjY0NTQwNjA0ZDQ4Y2VlMDBlMTMzYjAyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qWK6AxK-Ziv3TfYChptw6lkKQnYK73HDySC7E9VS0BY",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

movies.post("/addfavorite", (req, res) => {
  Favorites.findOrCreate({
    where: { tmdbId: req.body.tmdbId, type: req.body.type, userId: req.body.userId },
    defaults: {
      title: req.body.title,
      type: req.body.type, 
      tmdbId: req.body.tmdbId,
      userId: req.body.userId,
      year: req.body.year,
      posterURL: req.body.posterURL,
    },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
});

movies.get("/:userId/favorites", (req, res) => {
  Favorites.findAll({
    where: { userId: req.params.userId, type: "movie" },
  })
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => console.log(error));
});

movies.delete("/removefavorite", (req, res) => {
  let favorite = req.headers;
  Favorites.destroy({
    where: {
      title: favorite.title,
      type: favorite.type,
      tmdbId: favorite.tmdbid,
      userId: favorite.userid,
    },
  })
    .then((response) => {
      res.sendStatus(200);
      res.send(response);
    })
    .catch((error) => console.log(error));
});

module.exports = movies;
