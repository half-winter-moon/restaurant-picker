// const request = require('supertest');

// describe('Reviews Test Suite', () => {
//   const review = {
//     _id: '62b9e5a95b60a18abcc2bb34',
//     postedBy: '62b9e28cc8da181ea71296d5',
//     restaurantId: '62b3b24e2174cc0c56ab33b5',
//     content: 'This is a review by Jennie about the Southern restaurant',
//   };

//   it('test get /:id endpoints', async () => {
//     const response = await request('http://localhost:3000').get(
//       '/reviews/62b9e5a95b60a18abcc2bb34'
//     );

//     expect(response.body).toEqual(review);
//     expect(response.statusCode).toBe(200);
//   });

//   it('test post / endpoints', async () => {
//     const review = {
//       postedBy: '62b9e28cc8da181ea71296d5',
//       restaurantId: '62b3b24e2174cc0c56ab33b5',
//       content: 'This is a review by Jennie about the Southern restaurant',
//     };

//     const response = await request('http://localhost:3000')
//       .post('/reviews')
//       .send(review);

//     expect(response.statusCode).toBe(201);
//   });

//   it('test delete /:id endpoints', async () => {
//     const response = await request('http://localhost:3000').delete(
//       '/reviews/62b9e5a95b60a18abcc2bb34'
//     );
//     expect(response.statusCode).toBe(204);
//   });
// });
