const express = require('express');
const jwt = require('jsonwebtoken')
const employeeService = require('../services/employeeService');
const jwtSecret = 'asdasd34rfsdzsd333';


const router = express.Router();

// Entry point: http://localhost:4000/employee


router.get('/getAllEmployees', async (req, res) => {
    try {
        const data = await employeeService.getAllEmployee()
        if (data) {
            res.status(201).json(data)
        }
    } catch (error) {
        res.json('error');
    }
})


router.post('/addNewEmployee', async (req, res) => {
    try {
        const { firstName, lastName, yearOfStartingWork, department } = req.body;
        const data = await employeeService.addNewlEmployee(firstName, lastName, yearOfStartingWork,department)
        if (data) {
            res.status(201).json(data)
        } else {
            res.status(442).json('user not added')
        }
    } catch (error) {
        res.json('error');
    }
});

// Update a Employee
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await employeeService.updateEmployee(id, obj);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});


// Delete a Employee
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await employeeService.deleteEmployee(id);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
});















// // Get a Movie By ID
// router.get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const movie = await movieService.getById(id);
//         res.json(movie);
//     } catch (error) {
//         res.json(error);
//     }
// });

// // Add a new Movie
// router.post('/', async (req, res) => {
//     try {
//         const obj = req.body;
//         const result = await movieService.addMovie(obj);
//         res.status(201).json(result);
//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// });

// // Update a Movie
// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const obj = req.body;
//         const result = await movieService.updateMovie(id, obj);
//         res.json(result);
//     } catch (error) {
//         res.json(error);
//     }
// });


module.exports = router;