const userRepo = require('../repositories/usersRepo');


const getAllUsers = () => {
    return userRepo.getAllUsers()
};

const addNewlUser = (userName, email, actions) => {
    return userRepo.addUser(userName, email, actions)
};

module.exports = { getAllUsers, addNewlUser };