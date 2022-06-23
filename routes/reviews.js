const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');

router.get('/', reviewsController.getAllReviews);
router.get('/:id', reviewsController.getReview);

module.exports = router;
