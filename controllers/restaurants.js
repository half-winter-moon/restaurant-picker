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
      cuisine: ObjectId(req.body.cuisine),
      description: req.body.description,
      address: req.body.address,
      zipCode: req.body.zipCode,
      opens: req.body.opens,
      closes: req.body.closes,
      phoneNumber: req.body.phoneNumber,
      restaurantWebsite: req.body.restaurantWebsite,
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
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateRestaurant = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res
        .status(400)
        .json('Must use a valid restaurant id to update a restaurant.');
    }

    const restaurantId = new ObjectId(req.params.id);

    const restaurant = {
      restaurantName: req.body.restaurantName,
      cuisine: ObjectId(req.body.cuisine),
      description: req.body.description,
      address: req.body.address,
      zipCode: req.body.zipCode,
      opens: req.body.opens,
      closes: req.body.closes,
      phoneNumber: req.body.phoneNumber,
      restaurantWebsite: req.body.restaurantWebsite,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .replaceOne({ _id: restaurantId }, restaurant);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(`An error occurred updating a restaurant: ${response.error}`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRestaurant = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      res
        .status(400)
        .json('Must use a valid restaurant id to delete a restaurant.');
    }

    const restaurantId = new ObjectId(req.params.id);

    const response = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .remove({ _id: restaurantId }, true);

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res
        .status(500)
        .json(`An error occurred deleting a restaurant: ${response.error}`);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const excludeRestaurantByZipCode = async (req, res) => {
  try {
    const zipCode = req.params.zipCode;
    if (!zipCode) {
      res
        .status(400)
        .json(
          'Must use a valid Zip Code to look for what restaurants you do not like.'
        );
    }

    const response = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .find({ zipCode: { $not: { $eq: zipCode } } });

    response.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const excludeRestaurantByCuisine = async (req, res) => {
  try {
    const cuisine = ObjectId(req.params.cuisine);

    if (!cuisine) {
      res
        .status(400)
        .json(
          'Must use a valid Cuisine to look for restaurants you do not like.'
        );
    }

    const response = await mongodb
      .getDb()
      .db()
      .collection('restaurants')
      .find({ cuisine: { $not: { $eq: cuisine } } });

    response.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
  excludeRestaurantByZipCode,
  excludeRestaurantByCuisine,
};
