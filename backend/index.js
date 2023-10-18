const express=require("express");
const dotenv=require("dotenv");
const connectDb=require("./config/db");
const cors=require('cors');
const app=express();
app.use(cors());
const cookieParser=require('cookie-parser');
const userrouter=require('./routes/userRoutes');
const classrouter=require('./routes/classRoutes');
const cicorouter=require('./routes/cicoRoutes');
const enrollmentrouter = require("./routes/enrollmentRoutes");
const logrouter= require("./routes/logRoutes");
dotenv.config();
app.use(express.json());
app.use(cookieParser());

connectDb();

app.use('/api',userrouter);
app.use('/class',classrouter);
app.use('/cico',cicorouter);
app.use('/enroll',enrollmentrouter);
app.use('/log',logrouter);

app.get("/",(req,res)=>{
    res.send("API running");
})

const PORT= process.env.PORT || 5000;

app.listen(PORT,console.log(`Server running on ${PORT}`))