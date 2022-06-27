const express = require('express');
const router = express.Router();

const restaurantsController = require('../controllers/restaurants');
const validator = require('../validation-middleware');

router.get('/', restaurantsController.getAllRestaurants);
router.get('/:id', restaurantsController.getRestaurant);
router.post(
  '/',
  validator.saveRestaurant,
  restaurantsController.createRestaurant
);
router.put(
  '/:id',
  validator.saveRestaurant,
  restaurantsController.updateRestaurant
);
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
