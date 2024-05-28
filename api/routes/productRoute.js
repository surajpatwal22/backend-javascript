const express = require('express');

const router = express.Router();


const {getAllProducts,getAllProductsTesting,getProduct} = require('../controllers/productController.js')



router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);
router.route('/product/:id').get(getProduct);


module.exports = router;