require("dotenv").config();
const connectDB = require("./database/connection");
const Product = require("./model/product.model")
const ProductJson = require("./products.json");

const start = async () =>{
    try {
        await connectDB(process.env.MONGODB_URI);
        await Product.create(ProductJson);
        // console.log('success');
        
    } catch (error) {
        console.log(error);
    }
}

start();

