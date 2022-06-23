const express = require('express');
const router = express.Router();

const reviewsController = require('../controllers/reviews');

router.get('/', reviewsController.getAllReviews);

module.exports = router;
