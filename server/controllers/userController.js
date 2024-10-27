const express = require('express');
const userService = require('../services/userService');

const router = express.Router();

// Entry point: http://localhost:4000/login

// Check If USER EXISTS
router.post('/', async (req, res) => {
    try {
        const { userName, userEmail } = req.body;
        const { data } = await userService.getAllUsers();

        const findUser = data.find(obj => obj.username == userName)
        const findEmail = data.find(obj => obj.email == userEmail)

        if (findUser && findEmail) {
            res.json('ok');
        }else{
            res.json('user not founed')
        }
    } catch (error) {
        res.json('error');
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

// // Delete a Movie
// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const result = await movieService.deleteMovie(id);
//         res.json(result);
//     } catch (error) {
//         res.json(error);
//     }
// });

module.exports = router;