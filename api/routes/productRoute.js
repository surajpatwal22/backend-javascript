import express from "express";

const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('Hello World');
//     });

router.route('/').get(getAllProducts);

module.exports = router;