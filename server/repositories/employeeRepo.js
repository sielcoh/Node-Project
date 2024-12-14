const Employee = require('../models/employeeModel');

// Get All
const getAllEmployee = () => {
    return Employee.find({});
};

// Create
const addEmployee = (firstName, lastName, yearOfStartingWork,department) => {
    return Employee.create({
        firstName,
        lastName,
        yearOfStartingWork,
        department
        
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