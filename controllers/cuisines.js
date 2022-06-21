const mongodb = require('../db/connect');

// getCuisines function that gets all the cuisines from the cuisines collection
const getCuisines = async (req, res) => {
  try {
  const result = await mongodb.getDb().db().collection('cuisines').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
}
  catch(error) {
    res.status(500).json({message:error});
  }
};

// getcuisine function that gets a single cuisine from the cuisines collection
const getCuisine = async (req, res) => {
  try {
    const urlId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('cuisines').find({ _id: urlId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
  catch(error){
    res.status(500).json({message:error});
    }
  };

// addCuisine function that creates a cuisine item in the cuisines collection
const addCuisine = async (req, res) => {
  const cuisine = {
    name: req.body.name,
    description: req.body.description
  };
  const response = await mongodb.getDb().db().collection('cuisines').insertOne(cuisine);
  if (response.acknowledged) {
    res.status(201).json(response);
  } else {
    res.status(500).json(response.error || 'Some error occurred while adding the new cuisine.');
  }
};

// updateCuisine function that updates an existing cuisine in the cuisines collection
const updateCuisine = async (req, res) => {
  const cuisineId = new ObjectId(req.params.id);
  // be aware of updateOne if you only want to update specific fields
  const cuisine = {
    name: req.body.name,
    description: req.body.description
  };
  const response = await mongodb
    .getDb()
    .db()
    .collection('cuisines')
    .replaceOne({ _id: cuisineId }, cuisine);
  console.log(response);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the cuisine.');
  }
};

// deleteCuisine function that deletes an existing cuisine item from the cuisines collection
const deleteCuisine = async (req, res) => {
  const cuisineId = new ObjectId(req.params.id);
  const response = await mongodb.getDb().db().collection('cuisines').remove({ _id: cuisineId }, true);
  console.log(response);
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the cuisine.');
  }
};


module.exports = { 
  getCuisines,
  addCuisine,
  getCuisine,
  updateCuisine,
  deleteCuisine
};