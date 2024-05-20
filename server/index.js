import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import path from 'path'
import session from 'express-session';
import cookieParser from 'cookie-parser';


import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';

const app = express();
const port = 3000;

app.use(cors({
    origin:['http://localhost:5173'],
    methods:["POST","GET"],
    credentials:true
}))

app.use(bodyParser.json());
app.use('/images',express.static('public/images'));
app.use(fileUpload())
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:false,
    cookie:{
        secure:false,
        maxAge:1000*60*60*24
    }
}));
app.use(cookieParser());

app.use('/api',userRouter);
app.use('/api',productRouter)

mongoose.connect('mongodb://localhost:27017/samplecrud')
.then(()=>{
    console.log("Database connected to successfully");
})









app.listen(port,()=>{
    console.log("server running");
})