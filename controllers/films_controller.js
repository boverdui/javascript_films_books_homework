const express = require('express');
const FilmsData = require('../data/films_data.js');
const filmsData = new FilmsData();

const filmsRouter = new express.Router();

filmsRouter.get('/', function (req, res) {
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.get('/:id', function (req, res) {
  const index = req.params.id;
  const allFilms = filmsData.all();
  res.json({film: allFilms[index]});
});

filmsRouter.post('/', function(req, res) {
  const newFilm = req.body.film;
  filmsData.add(newFilm);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.put('/:id', function(req, res) {
  const index = req.params.id;
  const updatedFilm = req.body.film;
  filmsData.update(index, updatedFilm);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

filmsRouter.delete('/:id', function(req, res) {
  const index = req.params.id;
  filmsData.delete(index);
  const allFilms = filmsData.all();
  res.json({films: allFilms});
});

module.exports = filmsRouter;
