import dotenv from "dotenv";
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

dotenv.config({
    path: "./.env",
});

const app = express();

// app.use(cors()) --> options in cors is in the form of object
app.use(cors({
    origin: process.env.CORS_ORIGION,
    credentials: true
    }));

//for json data 
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//cookie
app.use(cookieParser());





export { app }