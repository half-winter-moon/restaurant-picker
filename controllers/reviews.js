const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllReviews = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('reviews').find();

    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getReview = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid review id to find a review');
    }

    const urlId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDb()
      .db()
      .collection('reviews')
      .find({ _id: urlId });

    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createReview = async (req, res) => {
  try {
    const review = {
      postedBy: req.body.postedBy,
      restaurantId: req.body.restaurantId,
      content: req.body.content,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('reviews')
      .insertOne(review);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(`An error occurred creating a review: ${response.error}`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateReview = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid review id to update a review.');
    }

    const reviewId = new ObjectId(req.params.id);

    const review = {
      postedBy: req.body.postedBy,
      restaurantId: req.body.restaurantId,
      content: req.body.content,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('reviews')
      .replaceOne({ _id: reviewId }, review);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(`An error occurred updating a review: ${response.error}`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteReview = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res.status(400).json('Must use a valid review id to delete a review.');
    }

    const reviewId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDb()
      .db()
      .collection('reviews')
      .remove({ _id: reviewId }, true);

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(`An error occurred deleting a review: ${response.error}`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
