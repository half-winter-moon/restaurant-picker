const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurants');

router.get('/', restaurantsController.getAllRestaurants);

module.exports = router;
