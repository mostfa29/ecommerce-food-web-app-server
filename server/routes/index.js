const { application } = require('express');
var express = require('express');
var router = express.Router();
const controller = require ('./controller')




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//products routes

//get all products
router.get('/products', controller.getProducts);
//get matiere premiere products

//get materiels products

// get product variants

//get sallable products

//get product by id
router.get('/products/:id',controller.getProductById)

//add new product
router.post('/products/', controller.addProduct);

//update a product
router.put('/products/:id', controller.updateProduct);

//delete a product
router.delete('/products/:id',controller.deleteProduct)

module.exports = router;
