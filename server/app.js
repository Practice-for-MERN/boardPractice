const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'http://localhost:3333',
    credentials: true
};
app.use(cors(corsOptions));
const database = require('./config/db');
const bcrypt = require('bcrypt');
const session = require('express-session');

app.use(database, (req,res,next)=>{
    next();
});

const userRoutes = require("./routes/userRouter");

// config/db 파일 시작 -> 데이터베이스 연동
const connect = require('./config/db');
// connect();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(session({secret : 'james'}));

//router
app.use("/user", userRoutes);

// 서버 open
const port = 5000
app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
})
