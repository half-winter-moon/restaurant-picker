const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllRestaurants = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('restaurants').find();

    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRestaurant = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res
        .status(400)
        .json('Must use a valid restaurant id to find a restaurant');
    }

    const urlId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .find({ _id: urlId });

    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createRestaurant = async (req, res) => {
  try {
    const restaurant = {
      restaurantName: req.body.restaurantName,
      cuisine: req.body.cuisine,
      description: req.body.description,
      address: req.body.address,
      zipCode: req.body.zipCode,
      opens: req.body.opens,
      closes: req.body.closes,
      phoneNumber: req.body.phoneNumber,
      restaurantWebsite: req.body.restaurantWebsite,
      reviews: req.body.reviews,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .insertOne(restaurant);

    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(`An error occurred creating a restaurant: ${response.error}`);
    }
    console.log('Hi');
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
};
