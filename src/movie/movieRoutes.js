const { Router } = require("express");

//import controllers to run when endpoints are hit
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieControllers")

// Router() function is used when you want to create a new router object in app to handle requests.
const movieRouter = Router();

//use http verb POST and GET to add and read data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.patch("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);


module.exports = movieRouter;