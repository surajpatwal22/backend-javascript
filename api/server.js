const express = require('express');

const app = express();

const port = process.env.port || 4000 ;

const product_routes = require('./routes/productRoute')

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api', product_routes )

const start = async () =>{
    try {
        app.listen(port,()=>{
            console.log(`Server is running on port ${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();