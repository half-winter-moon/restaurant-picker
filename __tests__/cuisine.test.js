// const cuisines = require('../routes/cuisines');

// const request = require('supertest');
// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use('/', cuisines);

// const cuisinesArray = [
//   {
//     "_id": "62b1d9b8ffeaf1c954d35584",
//     "name": "Japanese",
//     "description": "Food originating from Japan, with a unique Asian flavor profile."
//   },
//   {
//     "_id": "62b32d0bbfdce0a41f009703",
//     "name": "Southern",
//     "description": "Usually deap-fried and buttered, no one can beat a southern Grandma's chicken."
//   },
//   {
//     "_id": "62b9d03ba723d8b5d45f6a05",
//     "name": "Mexican",
//     "description": "The best tacos around"
//   },
//   {
//     "_id": "62b9d050a723d8b5d45f6a06",
//     "name": "Italian",
//     "description": "You have never tried a better pizza"
//   },
//   {
//     "_id": "62b9f1ba647a293727fb4f98",
//     "name": "Korean",
//     "description": "BTS dancing"
//   }
// ];

// test('cuisine GET route works', (done) => {
//   request(app)
//     .get('/')
//     .expect('Content-Type', /json/)
//     .expect(cuisinesArray)
//     .expect(200, done);
// });

// test('cuisine POST route works', (done) => {
//   request(app)
//     .post('/')
//     .expect('Content-Type', /json/)
//     .expect(201, done);
// });

// test('cuisine PUT route works', (done) => {
//   request(app)
//     .put('/:id')
//     .expect('Content-Type', /json/)
//     .expect(204, done);
// });

// test('cuisine DELETE route works', (done) => {
//   request(app)
//     .delete('/:id')
//     .expect('Content-Type', /json/)
//     .expect(204, done);
// });
