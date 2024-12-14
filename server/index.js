const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./configs/db');
const User = require('./models/userModel');
const axios = require('axios')

const userRouter = require('./controllers/userController');
const employeeRouter = require('./controllers/employeeController');
const departmentRouter = require('./controllers/departmentController');

const app = express();
const PORT = 4000;
// dotenv.config();

connectDB();

// פתיחת השרת לכל דומיין
app.use(cors());
app.use(cookieParser());
app.use(express.json());


// כל מה שמגיע מהבודי אז הוא עושה לו parsing ל גייסון
app.use('/', express.json());


// כל בקשה תגיע מהכתובת הנ"ל תעבור לכונטרולר הזה
app.use('/login', userRouter);
app.use('/employee', employeeRouter);
app.use('/department', departmentRouter);

// הכנסת חד"פ שכל המשתמשים למאגר המידע
// async function fetchAndSaveUsers() {
//     try {
//         const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
//         const validUsers = data.filter(user => user.username && user.email);
//         const transformedUsers = validUsers.map(user => ({
//             username: user.username,
//             email: user.email,
//             actions: 5
//         }));
        
//         await User.insertMany(transformedUsers);
//         console.log('Users have been successfully fetched and saved to the database');
//     }
//     catch (error) {
//         console.error('Error fetching or saving users:', error);
//     }
// }
// נתיב API שמבצע את הפעולה 
// app.get('/fetch-and-save-users', async (req, res) => {
//     await fetchAndSaveUsers();
//     res.send('Users fetched and saved successfully');
// });


app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
});