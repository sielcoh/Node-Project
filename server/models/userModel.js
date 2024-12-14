const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    actions: Number,
},
    { versionKey: false }
)

// המודל זה קלאס שבונה מסמך בתוך הקולכשיוון
// עכשיו - תחת השם pmoviess יהיה את הסכמה moviesSchema - אם הוא לא קיים הוא יצור אותו ואם הוא קיים הוא פשוט יתחבר אליו
const User = mongoose.model('user', userSchema)

module.exports = User