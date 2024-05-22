import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
name:{
    type:String,
    required:true
},
speciality:{
    type:String,
    required:true
},
salary:{
    type:String,
    required:true
},
experienceInYears:{
    type:Number,
    required:true,
    default: 0
},
qualification:{
    type:String,
    required:true
},
worksInHospitals:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }
]

},{timestamps:true});

export const Doctor =  mongoose.model("Doctor",doctorSchema);