import express from "express";

const app = express();

let PORT = 3000;

app.get('/', (req, res) => {
    console.log("server is running");
})