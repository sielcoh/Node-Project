const Department = require('../models/departmentModel');

// Get All
const getAllEmployee = () => {
    return Department.find({});
};


// Create
const addEmployee = (firstName, lastName, yearOfStartingWork) => {
    return Employee.create({
        firstName,
        lastName,
        yearOfStartingWork
    })
};

// Update
const updateEmployee = (id, obj) => {
    return Employee.findByIdAndUpdate(id, obj);
};


module.exports = {
    getAllEmployee,
    addEmployee,
    updateEmployee
};