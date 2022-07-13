const request = require('supertest');

describe('Restaurants Test Suite', () => {
  const restaurant = {
    _id: '62ce5e013c9413674ed7a407',
    restaurantName: 'Korean Restaurant',
    cuisine: '62b9f1ba647a293727fb4f98',
    description: 'A brief description about the restaurant',
    address: '274 S 2nd W, Rexburg, ID 83440',
    zipCode: '54321',
    opens: '10am',
    closes: '10pm',
    phoneNumber: '208-356-9005',
    restaurantWebsite: 'example.com',
    imgUrl: null,
  };

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/restaurants/62ce5e013c9413674ed7a407'
    );

    expect(response.body).toEqual(restaurant);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newRestaurant = {
      restaurantName: 'Korean Restaurant',
      cuisine: '62b9f1ba647a293727fb4f98',
      description: 'A brief description about the restaurant',
      address: '274 S 2nd W, Rexburg, ID 83440',
      zipCode: '54321',
      opens: '10am',
      closes: '10pm',
      phoneNumber: '208-356-9005',
      restaurantWebsite: 'example.com',
    };

    const response = await request('http://localhost:3000')
      .post('/restaurants')
      .send(newRestaurant);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/restaurants/62ce5e013c9413674ed7a407'
    );

    expect(response.statusCode).toBe(204);
  });
});
