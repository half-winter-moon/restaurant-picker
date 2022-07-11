const request = require('supertest');

describe('Restaurant Test Suite', () => {
  const restaurant = {
    _id: '62b9d069a723d8b5d45f6a07',
    restaurantName: 'Mexican Restaurant',
    cuisine: '62b9d03ba723d8b5d45f6a05',
    description: 'A brief description about the restaurant',
    address: '274 S 2nd W, Rexburg, ID 83440',
    zipCode: '13452',
    opens: '10am',
    closes: '9pm',
    phoneNumber: '208-356-9005',
    restaurantWebsite: 'example.com',
  };

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/restaurants/62b9d069a723d8b5d45f6a07'
    );

    expect(response.body).toEqual(restaurant);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const restaurantPost = {
      restaurantName: 'Japanesse Restaurant',
      cuisine: '62b1d9b8ffeaf1c954d35584',
      description: 'A brief description about the restaurant',
      address: '274 S 2nd W, Rexburg, ID 83440',
      zipCode: '13452',
      opens: '10am',
      closes: '9pm',
      phoneNumber: '208-356-9005',
      restaurantWebsite: 'example.com',
    };

    const response = await request('http://localhost:3000')
      .post('/restaurants')
      .send(restaurantPost);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/restaurants/62b9cfd3a723d8b5d45f6a04'
    );
    expect(response.statusCode).toBe(204);
  });
});
