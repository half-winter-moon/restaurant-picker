const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { auth, requiresAuth } = require('express-openid-connect');

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

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

app.use(auth(config));

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options))
  .use(cors())
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// app.use('/restaurants', requiresAuth(), restaurantsRoutes);
// app.use('/users', requiresAuth(), usersRoutes);
// app.use('/cuisines', cuisinesRoutes);
// app.use('/reviews', requiresAuth(), reviewsController);

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
