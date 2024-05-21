import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type:string,
        required:true,
        unique:true,
        lowercase:true
    },
    //email
    emial:{
        type:string,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:string,
        required:true
    }
},{timestamps:true});

export default mongoose.model("User",userSchema);

