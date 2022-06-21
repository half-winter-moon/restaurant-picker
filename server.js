const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const mongodb = require('./db/connect');
const restaurantsRoutes = require('./routes/restaurants');

const port = process.env.PORT || 3000;
const app = express();
app.use(cors()).use(bodyParser.json());

app.use('/restaurants', restaurantsRoutes);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port:${port}`);
  }
});
