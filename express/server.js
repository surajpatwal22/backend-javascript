import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();

// dotenv.config();

const PORT = process.env.PORT || 4000;

app.get("/",(req,res)=>{
    res.send("hello world");
});

app.listen(PORT,()=>console.log(`server is running on ${PORT}`));


