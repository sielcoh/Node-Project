const employeeRepo = require('../repositories/employeeRepo');

const getAllEmployee = () => {
    return employeeRepo.getAllEmployee()
};

const addNewlEmployee = (firstName, lastName, yearOfStartingWork) => {
    return employeeRepo.addEmployee(firstName, lastName, yearOfStartingWork)
};

const updateEmployee = (obj) => {
    return employeeRepo.updateEmployee(id, obj)
};


module.exports = {
    getAllEmployee,
    addNewlEmployee,
    updateEmployee
};