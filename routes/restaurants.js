const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurants');

router.get('/', restaurantsController.getAllRestaurants);
router.get('/:id', restaurantsController.getRestaurant);
router.post('/', restaurantsController.createRestaurant);
router.put('/:id', restaurantsController.updateRestaurant);
router.delete('/:id', restaurantsController.deleteRestaurant);
router.get(
  '/excludeByZipCode/:zipCode',
  restaurantsController.excludeRestaurantByZipCode
);
router.get(
  '/excludeByCuisine/:cuisine',
  restaurantsController.excludeRestaurantByCuisine
);

module.exports = router;
