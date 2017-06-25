var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.server');
var ctrlOthers = require('../controllers/others.server');
/* GET home page. */
router.get('/', ctrlLocations.homeList);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/add/review', ctrlLocations.addReview);
router.get('/about', ctrlOthers.about);
module.exports = router;