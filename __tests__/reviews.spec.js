const request = require('supertest');

describe('Reviews Test Suite', () => {
  const review = {
    _id: '62b9e5715b60a18abcc2bb32',
    postedBy: '62b9e275c8da181ea71296d3',
    restaurantId: '62b9cfd3a723d8b5d45f6a04',
    content: 'This is a review by Kevin W about the Japanesse restaurant',
  };

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/reviews/62b9e5715b60a18abcc2bb32'
    );

    expect(response.body).toEqual(review);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const review = {
      postedBy: '62b9e29cc8da181ea71296d6',
      restaurantId: '62b9d069a723d8b5d45f6a07',
      content: 'This is a review by Tanner about the Mexican restaurant',
    };

    const response = await request('http://localhost:3000')
      .post('/reviews')
      .send(review);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/reviews/62b9e5715b60a18abcc2bb32'
    );
    expect(response.statusCode).toBe(204);
  });
});
