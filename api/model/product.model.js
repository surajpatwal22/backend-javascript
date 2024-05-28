const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter name"],
    },
    description: {
        type: String,
        required: true,
    },
    features: {
        type: Boolean,
        default:false,
    },
    price: {
        type: Number,
        required: [true,"Enter price"],
    },
  company:{
    type:String,
    enum:{
        values:["apple","samsung","mi","infinix"],
        message:"{VALUE} is not supported"
    }
  }

},{timestamps:true});

module.exports = mongoose.model("Product", productSchema)