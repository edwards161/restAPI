//requiring movie model to pass in specific data
const Movie = require("./movieModel")


//function to add a movie to the database
exports.addMovie = async (req, res) => {
    try {
        //creating a new movie with entire body request containing key value pairs
        const newMovie = await Movie.create(req.body);
        res.status(200).send({ movie: newMovie })
    } catch (error) {
        console.log(error);
        res.status(500).send({ error: error.message })
    }
};

//function to list all movies in database
exports.listMovies = async (req, res) => {
    try {
        const movies = await Movie.find({})
        res.status(200).send({ movies })
    } catch (error) {
        console.log(error)
        res.status(500).send({ error: error.message })
    }
};

exports.updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.updateOne(
            {title: req.body.title},
            { $set:{title: req.body.title, actors: req.body.actors}})
            res.status(200).send({ updatedMovie })
        
    } catch (error) {
        console.log(error)
        res.status(500).send({error: error.message})
    }
}

exports.deleteMovie = async (req, res) => {
    try {
        const remove = await Movie.deleteOne(
            {title: req.body.title})
            res.status(200).send({remove})
        } catch (error) {
            console.log (error);
            res.status(500).send({error: error.message})
    }
}