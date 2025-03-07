const Movie = require('../models/movies.model');

const getMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

module.exports = { getMovies };
