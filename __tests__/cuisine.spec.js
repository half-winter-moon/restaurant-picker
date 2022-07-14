const request = require('supertest');

const cuisinesArray = [
  {
    _id: '62b1d9b8ffeaf1c954d35584',
    name: 'Asian',
    description: 'Food originating from Asia.',
  },
  {
    _id: '62b32d0bbfdce0a41f009703',
    name: 'BBQ',
    description:
      'Usually deap-fried and buttered with a lot of barbecue sauce.',
  },
  {
    _id: '62b9d03ba723d8b5d45f6a05',
    name: 'Mexican',
    description: 'The best tacos around',
  },
  {
    _id: '62b9d050a723d8b5d45f6a06',
    name: 'Italian',
    description: 'You have never tried a better pizza',
  },
  {
    _id: '62cefc86c0fcc5d37413913f',
    name: 'Fast Food',
    description:
      'Very quick, and unhealthy, this might just cure your cravings.',
  },
  {
    _id: '62cf158679be056779a90936',
    description: "Doesn't get more American than these choices.",
    name: 'American',
  },
];

const cuisine = {
  _id: '62cf158679be056779a90936',
  description: "Doesn't get more American than these choices.",
  name: 'American',
};

describe('cuisine Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/cuisines');

    expect(response.body).toEqual(cuisinesArray);
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/cuisines/62cf158679be056779a90936'
    );

    expect(response.body).toEqual(cuisine);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newCuisine = {
      description: "Doesn't get more American than these choices.",
      name: 'American',
    };

    const response = await request('http://localhost:3000')
      .post('/cuisines')
      .send(newCuisine);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/cuisines/62cf158679be056779a90936'
    );

    expect(response.statusCode).toBe(204);
  });
});
