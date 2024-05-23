import express from "express";

const app = express();

const port = process.env.port || 4000 ;

app.get("/",(req,res)=>{
    res.send("Hello World");
})

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