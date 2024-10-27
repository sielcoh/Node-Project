const mongoose = require('mongoose');

const connectDB = () => {
    //connect to mongoDB database
    mongoose.connect(`mongodb://127.0.0.1:27017/moviesDB`)
        .then(() => console.log('Connected to moviesDB'))
        .catch(err => console.log(err))
}

module.exports = connectDB