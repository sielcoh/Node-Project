const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: String,
    director: String,
    premieredYear: Number
},
    { versionKey: false }
)

// המודל זה קלאס שבונה מסמך בתוך הקולכשיוון
// עכשיו - תחת השם pmoviess יהיה את הסכמה moviesSchema - אם הוא לא קיים הוא יצור אותו ואם הוא קיים הוא פשוט יתחבר אליו
const Movie = mongoose.model('movie', movieSchema)

module.exports = Movie