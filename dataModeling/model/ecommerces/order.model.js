import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type:Number,
        default:1,
        required:true
    }
})

const orderSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderPrice:{
        type:Number,
        required:true
    },
    orderItems:{
        type:[orderItemSchema],
        required:true
    },
    address:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:["pending","cancelled","delivered"],
        default:"pending",
        required:true
    }
},{timestamps:true});

export const Order = mongoose.model("Order",orderSchema);