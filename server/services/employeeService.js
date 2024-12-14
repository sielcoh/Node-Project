const employeeRepo = require('../repositories/employeeRepo');

const getAllEmployee = () => {
    return employeeRepo.getAllEmployee()
};

const addNewlEmployee = (firstName, lastName, yearOfStartingWork) => {
    return employeeRepo.addEmployee(firstName, lastName, yearOfStartingWork)
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