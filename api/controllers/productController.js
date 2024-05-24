 const getAllProducts =  async (req, res) =>{
    res.status(200).json({
        message: "all product retrieved"
    })
 }

 const getAllProductsTesting =  async (req, res) =>{
    res.status(200).json({
        message: "all test product retrieved"
    })
 }
 

 module.exports = {getAllProducts,getAllProductsTesting};