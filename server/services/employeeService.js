const employeeRepo = require('../repositories/employeeRepo');

const getAllEmployee = () => {
    return employeeRepo.getAllEmployee()
};

const addNewlEmployee = (obj) => {
    return employeeRepo.addEmployee(obj)
};

const updateEmployee = (obj) => {
    return employeeRepo.updateEmployee(id, obj)
};


module.exports = {
    getAllEmployee,
    addNewlEmployee,
    updateEmployee
};