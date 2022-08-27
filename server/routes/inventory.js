var express = require('express');
var router = express.Router();
const controller = require ('./controller')



/* GET home page. */
router.get('/inventory', getProducts);

module.exports = router;
