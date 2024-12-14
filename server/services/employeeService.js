const employeeRepo = require('../repositories/employeeRepo');

const getAllEmployee = () => {
    return employeeRepo.getAllEmployee()
};

const addNewlEmployee = (firstName, lastName, yearOfStartingWork, department) => {
    return employeeRepo.addEmployee(firstName, lastName, yearOfStartingWork, department)
};

const updateEmployee = (id, obj) => {
    return employeeRepo.updateEmployee(id, obj)
};

const deleteEmployee = (id) => {
    return employeeRepo.deleteEmployee(id);
};

const getById = (id) => {
    return employeeRepo.getById(id);
};


module.exports = {
    getAllEmployee,
    addNewlEmployee,
    updateEmployee,
    deleteEmployee,
    getById
};