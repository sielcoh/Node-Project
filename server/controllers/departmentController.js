const express = require('express');
const jwt = require('jsonwebtoken')
const dempartmentService = require('../services/departmentService.js');
const jwtSecret = 'asdasd34rfsdzsd333';


const router = express.Router();
// const secretKey = process.env.SECRET_KEY;
// Entry point: http://localhost:4000/department

router.get('/getAllDepartment', async (req, res) => {
    try {
        const data = await dempartmentService.getAllDepartment()
        if (data) {
            res.status(201).json(data)
        }
    } catch (error) {
        res.json('error');
    }
});

router.post('/addNewDepartment', async (req, res) => {
    try {
        const { name, manager, employees } = req.body;
        const result = await dempartmentService.addNewlDepartment(name, manager, employees)
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json(error.message);
    }
});

// Update a Department
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await dempartmentService.updateDepartment(id, obj);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

// Delete a Department
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await dempartmentService.deleteDepartment(id);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});

//Get Department By Id
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const department = await dempartmentService.getById(id);
        res.json(department);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;