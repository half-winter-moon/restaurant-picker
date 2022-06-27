const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

// getUsers function that gets all the users from the users collection
const getUsers = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('users').find();

    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// getuser function that gets a single user from the users collection
const getUser = async (req, res) => {
  try {
    const urlId = new ObjectId(req.params.id);

    const result = await mongodb
      .getDb()
      .db()
      .collection('users')
      .find({ _id: urlId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

// addUser function that creates a user item in the users collection
const addUser = async (req, res) => {
  try {
    const user = {
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection('users')
      .insertOne(user);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || 'Some error occurred while adding the new user.'
        );
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// updateUser function that updates an existing user in the users collection
const updateUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  // be aware of updateOne if you only want to update specific fields
  const user = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('users')
    .replaceOne({ _id: userId }, user);

  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while updating the user.');
  }
};

// deleteUser function that deletes an existing user item from the users collection
const deleteUser = async (req, res) => {
  const userId = new ObjectId(req.params.id);

  const response = await mongodb
    .getDb()
    .db()
    .collection('users')
    .remove({ _id: userId }, true);

  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while deleting the user.');
  }
};

module.exports = {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
};
