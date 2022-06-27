const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');
const validator = require('../validation-middleware');

router.get('/', reviewsController.getAllReviews);
router.get('/:id', reviewsController.getReview);
router.post('/', validator.saveReview, reviewsController.createReview);
router.put('/:id', validator.saveReview, reviewsController.updateReview);
router.delete('/:id', reviewsController.deleteReview);

module.exports = router;
