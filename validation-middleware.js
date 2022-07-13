const validator = require('./validate.js');

const saveRestaurant = (req, res, next) => {
  const validationRule = {
    restaurantName: 'required|string',
    cuisine: 'required|string',
    description: 'required|string',
    address: 'required|string',
    zipCode: 'required|string',
    opens: 'required|string',
    closes: 'required|string',
    phoneNumber: 'required|string',
    restaurantWebsite: 'required|string',
    imgUrl: 'string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Please add the missing fields or match the correct type',
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveReview = (req, res, next) => {
  const validationRule = {
    postedBy: 'required|string',
    restaurantId: 'required|string',
    content: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Please add the missing fields or match the correct type',
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveCuisine = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    description: 'string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Incorrect entry',
        data: err,
      });
    } else {
      next();
    }
  });
};

const saveUser = (req, res, next) => {
  const validationRule = {
    name: 'required|string',
    password: 'required|string',
    email: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Incorrect entry',
        data: err,
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveRestaurant,
  saveReview,
  saveCuisine,
  saveUser,
};
