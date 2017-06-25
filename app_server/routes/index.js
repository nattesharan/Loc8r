var express = require('express');
var router = express.Router();
var homeController = require('../controllers/homecontroller.server')
    /* GET home page. */
router.get('/', homeController.index);
module.exports = router;