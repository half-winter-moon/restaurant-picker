const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const mongodb = require('./db/connect');
const restaurantsRoutes = require('./routes/restaurants');
const usersRoutes = require('./routes/users');
const cuisinesRoutes = require('./routes/cuisines');
const reviewsController = require('./routes/reviews');

var options = {
  explorer: true,
};

const port = process.env.PORT || 3000;
const app = express();

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.use('/restaurants', restaurantsRoutes);
app.use('/users', usersRoutes);
app.use('/cuisines', cuisinesRoutes);
app.use('/reviews', reviewsController);

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and listening on port:${port}`);
  }
});
