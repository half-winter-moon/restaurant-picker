const mongodb = require('../db/connect');

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

module.exports = {
  getAllRestaurants,
};
