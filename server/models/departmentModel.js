const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
    Name: {type: String, unique:true},
    Manager: {type: String, unique:true},
},
    { versionKey: false }
)

// המודל זה קלאס שבונה מסמך בתוך הקולכשיוון
// עכשיו - תחת השם pmoviess יהיה את הסכמה moviesSchema - אם הוא לא קיים הוא יצור אותו ואם הוא קיים הוא פשוט יתחבר אליו
const Department = mongoose.model('department', departmentSchema)

module.exports = Department