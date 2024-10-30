const Employee = require('../models/employeeModel');

// Get All
const getAllEmployee = (filters) => {
    return Employee.find(filters);
};
// Create
const addEmployee = (obj) => {
    const movie = new Employee(obj);
    return movie.save();
};


// Update
const updateEmployee = (id, obj) => {
    return Employee.findByIdAndUpdate(id, obj);
};

// // Get By ID
// const getById = (id) => {
//     return Movie.findById(id);
// };



// // Delete
// const deleteMovie = (id) => {
//     return Movie.findByIdAndDelete(id);
// };

module.exports = {
    getAllEmployee,
    addEmployee,
    updateEmployee
};