require("dotenv").config();
const express = require('express');

const app = express();
const connectDB = require("./database/connection")
 
const port = process.env.port || 4000 ;

const product_routes = require('./routes/productRoute')

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api/products', product_routes )

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();