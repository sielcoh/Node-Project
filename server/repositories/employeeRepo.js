const Employee = require('../models/employeeModel');

// Get All
const getAllEmployee = () => {
    return Employee.find({});
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

// Get By ID
const getById = (id) => {
    return Employee.findById(id);
};


// Delete
const deleteEmployee = (id) => {
    return Employee.findByIdAndDelete(id);
};

module.exports = {
    getAllEmployee,
    addEmployee,
    updateEmployee,
    deleteEmployee,
    getById
};