const express = require('express');
const router = express.Router();

const validator = require('../validation-middleware');
const cuisineController = require('../controllers/cuisines');

router.get('/', cuisineController.getCuisines);
router.get('/:id', cuisineController.getCuisine);
router.post('/', validator.saveCuisine, cuisineController.addCuisine);
router.put('/:id', validator.saveCuisine, cuisineController.updateCuisine);
router.delete('/:id', cuisineController.deleteCuisine);

module.exports = router;
