const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    firstName: { type: String, unique: true },
    lastName: { type: String, unique: true },
    yearOfStartingWork: { type: Number, unique: true },
    department: { type: String, unique: true }
},
    { versionKey: false }
)

// המודל זה קלאס שבונה מסמך בתוך הקולכשיוון
// עכשיו - תחת השם pmoviess יהיה את הסכמה moviesSchema - אם הוא לא קיים הוא יצור אותו ואם הוא קיים הוא פשוט יתחבר אליו
const Employee = mongoose.model('employee', employeeSchema)

module.exports = Employee