// const request = require('supertest');

// describe('Restaurants Test Suite', () => {
//   const restaurant = {
//     _id: '62cc3b1ec43a09d87a02deb7',
//     restaurantName: 'McDonalds',
//     cuisine: '62cefc86c0fcc5d37413913f',
//     description:
//       'Classic, long-running fast-food chain known for its burgers & fries.',
//     address: '850 University Blvd, Rexburg, ID',
//     zipCode: '83440',
//     opens: '12am',
//     closes: '12pm',
//     phoneNumber: '(208)-356-6141',
//     restaurantWebsite: 'https://www.mcdonalds.com/us/en-us.html',
//     price: '$',
//     cuisineType: 'Fast Food',
//     imgUrl: 'https://i.ibb.co/GQh3N5X/mcdonalds-svg.png',
//     diningStyle: 'Dine-in & Drive-thru',
//   };

//   it('test get /:id endpoints', async () => {
//     const response = await request('http://localhost:3000').get(
//       '/restaurants/62cc3b1ec43a09d87a02deb7'
//     );

//     expect(response.body).toEqual(restaurant);
//     expect(response.statusCode).toBe(200);
//   });

//   it('test post / endpoints', async () => {
//     const newRestaurant = {
//       restaurantName: 'McDonalds',
//       cuisine: '62cefc86c0fcc5d37413913f',
//       description:
//         'Classic, long-running fast-food chain known for its burgers & fries.',
//       address: '850 University Blvd, Rexburg, ID',
//       zipCode: '83440',
//       opens: '12am',
//       closes: '12pm',
//       phoneNumber: '(208)-356-6141',
//       restaurantWebsite: 'https://www.mcdonalds.com/us/en-us.html',
//       price: '$',
//       cuisineType: 'Fast Food',
//       imgUrl: 'https://i.ibb.co/GQh3N5X/mcdonalds-svg.png',
//       diningStyle: 'Dine-in & Drive-thru',
//     };

//     const response = await request('http://localhost:3000')
//       .post('/restaurants')
//       .send(newRestaurant);

//     expect(response.statusCode).toBe(201);
//   });

//   it('test delete /:id endpoints', async () => {
//     const response = await request('http://localhost:3000').delete(
//       '/restaurants/62cc3b1ec43a09d87a02deb7'
//     );

//     expect(response.statusCode).toBe(204);
//   });
// });
