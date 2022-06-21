const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongodb = require('./db/connect');
const restaurantsRoutes = require('./routes/restaurants');
const usersRoutes = require('./routes/users');
const cuisinesRoutes = require('./routes/cuisines');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors()).use(bodyParser.json());

app.use('/restaurants', restaurantsRoutes);
app.use('/users', usersRoutes);
app.use('/cuisines', cuisinesRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port:${port}`);
  }
});
