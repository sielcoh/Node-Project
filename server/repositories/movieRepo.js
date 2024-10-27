const Movie = require('../models/MovieModel');

// Get All
const getAllMovies = (filters) => {
    return Movie.find(filters);
};

// Get By ID
const getById = (id) => {
    return Movie.findById(id);
};

// Create
const addMovie = (obj) => {
    const movie = new Movie(obj);
    return movie.save();
};

// Update
const updateMovie = (id, obj) => {
    return Movie.findByIdAndUpdate(id, obj);
};

// Delete
const deleteMovie = (id) => {
    return Movie.findByIdAndDelete(id);
};

module.exports = {
    getAllMovies,
    getById,
    addMovie,
    updateMovie,
    deleteMovie,
};