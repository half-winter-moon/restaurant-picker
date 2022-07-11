// const users = require('../routes/users');

// const request = require('supertest');
// const express = require('express');
// const app = express();

// app.use(express.urlencoded({ extended: false }));
// app.use('/', users);

// const usersArray = [
//   {
//     "_id": "62b9e26dc8da181ea71296d2",
//     "name": "Kevin C",
//     "password": "12345",
//     "email": "kevin@kevin.com"
//   },
//   {
//     "_id": "62b9e275c8da181ea71296d3",
//     "name": "Kevin W",
//     "password": "12345",
//     "email": "kevin@kevin.com"
//   },
//   {
//     "_id": "62b9e283c8da181ea71296d4",
//     "name": "Lakeram",
//     "password": "12345",
//     "email": "lakeram@lakeram.com"
//   },
//   {
//     "_id": "62b9e28cc8da181ea71296d5",
//     "name": "Jennie",
//     "password": "12345",
//     "email": "jennie@jennie.com"
//   },
//   {
//     "_id": "62b9e29cc8da181ea71296d6",
//     "name": "Tanner",
//     "password": "12345",
//     "email": "tanner@tanner.com"
//   }
// ];

// test('user GET route works', (done) => {
//   request(app)
//     .get('/')
//     .expect('Content-Type', /json/)
//     .expect(usersArray)
//     .expect(200, done);
// });

// test('user GET by id route works', (done) => {
//   request(app)
//     .get('/:id')
//     .expect('Content-Type', /json/)
//     // .expect(usersArray)
//     .expect(200, done);
// });

// test('user POST route works', (done) => {
//   request(app)
//     .post('/')
//     .expect('Content-Type', /json/)
//     .expect(201, done);
// });

// test('user PUT route works', (done) => {
//   request(app)
//     .put('/:id')
//     .expect('Content-Type', /json/)
//     .expect(204, done);
// });

// test('user DELETE route works', (done) => {
//   request(app)
//     .delete('/:id')
//     .expect('Content-Type', /json/)
//     .expect(204, done);
// });
