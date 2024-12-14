const Department = require('../models/departmentModel');

// Get All
const getAllDepartment = () => {
    return Department.find({});
};

// Create
const addDepartment = (name, manager) => {
    return Department.create({
        name,
        manager
    })
};

// Update
const updateDepartment = (id, obj) => {
    return Department.findByIdAndUpdate(id, obj);
};

// Get By ID
const getById = (id) => {
    return Department.findById(id);
};

// Delete
const deleteDepartment = (id) => {
    return Department.findByIdAndDelete(id);
};

module.exports = {
    getAllDepartment,
    addDepartment,
    updateDepartment,
    getById,
    deleteDepartment
};