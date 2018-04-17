const express = require("express");
const app = express();
const filmRouter = new express.Router();

//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

filmRouter.get("/", function(req, res){
  // debugger;
  res.json(films);
});

filmRouter.get("/:id", function(req, res){
  res.json(films[req.params.id]);
});

filmRouter.post("/", function(req, res){
  const filmToAdd = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films.push(filmToAdd);
  res.json(films);
});

filmRouter.put("/:id", function(req, res){
  const filmToEdit = new Film({
    title: req.body.title,
    actors: req.body.actors
  });
  films[req.params.id] = filmToEdit;
  res.json(films);
});

filmRouter.delete("/:id", function(req, res){
  films.splice(req.params.id, 1);
  res.json(films);
});

module.exports = filmRouter;
