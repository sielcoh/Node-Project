const userRepo = require('../repositories/usersRepo');

const getAllUsers = () => {
    return userRepo.getAllUsers()
};

// const getById = (id) => {
//     return movieRepo.getById(id);
// };

// const addMovie = (obj) => {
//     return movieRepo.addMovie(obj);
// };

// const updateMovie = (id, obj) => {
//     return movieRepo.updateMovie(id, obj);
// };

// const deleteMovie = (id) => {
//     return movieRepo.deleteMovie(id);
// };

module.exports = {
    getAllUsers
};