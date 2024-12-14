const axios = require('axios')
const URL = 'https://jsonplaceholder.typicode.com/users'
const User = require('../models/userModel');


const getAllUsers = async () => {
    return axios.get(URL)
}

module.exports = { getAllUsers }