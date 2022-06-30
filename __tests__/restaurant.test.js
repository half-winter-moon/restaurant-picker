const restaurants = require('../routes/restaurants');

const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use('/', restaurants);

const restaurantsArray = [
  {
    _id: '62b3b24e2174cc0c56ab33b5',
    restaurantName: 'Southern Restaurant',
    cuisine: '62b32d0bbfdce0a41f009703',
    description: 'A brief description about the restaurant',
    address: '274 S 2nd W, Rexburg, ID 83440',
    zipCode: '12345',
    opens: '10am',
    closes: '9pm',
    phoneNumber: '208-356-9005',
    restaurantWebsite: 'example.com',
  },
  {
    _id: '62b9cfd3a723d8b5d45f6a04',
    restaurantName: 'Japanesse Restaurant',
    cuisine: '62b1d9b8ffeaf1c954d35584',
    description: 'A brief description about the restaurant',
    address: '274 S 2nd W, Rexburg, ID 83440',
    zipCode: '13452',
    opens: '10am',
    closes: '9pm',
    phoneNumber: '208-356-9005',
    restaurantWebsite: 'example.com',
  },
];

test('restaurants route works', (done) => {
  request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect(restaurantsArray)
    .expect(200, done);
});
