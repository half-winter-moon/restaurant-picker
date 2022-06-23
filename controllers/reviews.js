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

module.exports = {
  getAllReviews,
  getReview,
};
