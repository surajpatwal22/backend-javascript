import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./db/connection.js";


// import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config({
    path: "./env",
});

const PORT = process.env.PORT || 5000;

connectDB()

// (async()=>{
//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log('MongoDB connected')
//         app.on("error",()=>{
//             console.log("ERROR",error);
//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server running on port ${process.env.PORT}`);
//         });
        
//     } catch (error) {
//         console.log('Error',error)
//     }
// })();

// app.use("/api/users", userRoutes);


