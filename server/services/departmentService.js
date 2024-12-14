const departmentRepo = require('../repositories/departmentRepo');

const getAllDepartment = () => {
    return departmentRepo.getAllDepartment()
};

const addNewlDepartment = (name, manager) => {
    return departmentRepo.addDepartment(name, manager)
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