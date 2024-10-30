const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const dotenv = require('dotenv');
// const connectDB = require('./configs/db');

const userRouter = require('./controllers/userController');
const employeeRouter = require('./controllers/employeeController');

const app = express();
const PORT = 4000;
// dotenv.config();

// connectDB();

// פתיחת השרת לכל דומיין
app.use(cors());
app.use(cookieParser());
app.use(express.json());


// כל מה שמגיע מהבודי אז הוא עושה לו parsing ל גייסון
app.use('/', express.json());


// כל בקשה תגיע מהכתובת הנ"ל תעבור לכונטרולר הזה
app.use('/login', userRouter);
app.use('/employee', employeeRouter);


app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
});