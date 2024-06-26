 const Product = require("../model/product.model")
 
 const getAllProducts =  async (req, res) =>{
   
    try {
        const products = await Product.find({}).sort({price: -1});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 }

const getProduct = async (req, res) =>{
    try {
        const product = await Product.findById(req.params.id);  
        if (!product) return res.status(404).json({ message: 'Product not found' });
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

 const getAllProductsTesting =  async (req, res) =>{
    const {company} = req.query;
    const queryObject ={};
    if(company){
        queryObject.company = company;
    }
    try {
        const products = await Product.find(queryObject );
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
 }
 

 module.exports = {getAllProducts,getAllProductsTesting,getProduct};