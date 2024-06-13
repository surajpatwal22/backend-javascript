import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env", 
});

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI;
        if (!uri) {
            throw new Error("MONGODB_URI is not defined in the environment variables.");
        }
        const conn = await mongoose.connect(uri, {
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection error:", error);
        process.exit(1); 
    }
};

export default connectDB;
