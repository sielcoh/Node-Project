const departmentRepo = require('../repositories/departmentRepo');

const getAllDepartment = () => {
    return departmentRepo.getAllDepartment()
};

const addNewlDepartment = (name, manager, employees) => {
    return departmentRepo.addDepartment(name, manager, employees)
};

const updateDepartment = (id, obj) => {
    return departmentRepo.updateDepartment(id, obj)
};

const deleteDepartment = (id) => {
    return departmentRepo.deleteDepartment(id);
};

const getById = (id) => {
    return departmentRepo.getById(id);
};


module.exports = {
    getAllDepartment,
    addNewlDepartment,
    updateDepartment,
    deleteDepartment,
    getById
};