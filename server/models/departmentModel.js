const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    name: {type: String, unique:true},
    manager: {type: String, unique:true},
    employees: {type: Array}
},
    { versionKey: false }
)

const Department = mongoose.model('department', departmentSchema)

module.exports = Department