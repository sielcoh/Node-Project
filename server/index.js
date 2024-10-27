const express = require('express');
const cors = require('cors');
// const connectDB = require('./configs/db');

const userRouter = require('./controllers/userController');

const app = express();
const PORT = 4000;

// connectDB();

// פתיחת השרת לכל דומיין
app.use(cors());


// כל מה שמגיע מהבודי אז הוא עושה לו parsing ל גייסון
app.use('/', express.json());


// כל בקשה תגיע מהכתובת הנ"ל תעבור לכונטרולר הזה
app.use('/login', userRouter);

// app.post('/login', (req, res) => {
//     res.json('ok')
// })

app.listen(PORT, () => {
    console.log(`app is listening at http://localhost:${PORT}`);
});