import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
address:{
    type:String,
    required:true
},
city:{
    type:String,
    required:true
},
state:{
    type:String,
    required:true
},
pinCode:{
    type:Number,
    required:true
},
contactNumber:{
    type:Number,
    required:true
},
specialised:[
    {
        type:String
    }
],
doctors:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Doctor"
    }
],
},{timestamps:true});

export const Hospital =  mongoose.model("Hospital",hospitalSchema);