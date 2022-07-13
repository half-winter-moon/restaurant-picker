const request = require('supertest');

const cuisinesArray = [
  {
    _id: '62b1d9b8ffeaf1c954d35584',
    name: 'Japanese',
    description:
      'Food originating from Japan, with a unique Asian flavor profile.',
  },
  {
    _id: '62b32d0bbfdce0a41f009703',
    name: 'Southern',
    description:
      "Usually deap-fried and buttered, no one can beat a southern Grandma's chicken.",
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
    _id: '62cc42a971b745f86760a73e',
    name: 'Fast Food',
    description:
      'Very quick, and unhealthy, this might just cure your cravings.',
  },
  {
    _id: '62ce671db35b4e0c98917df4',
    name: 'Fast Food',
    description:
      'Very quick, and unhealthy, this might just cure your cravings.',
  },
];

const cuisine = {
  _id: '62ce671db35b4e0c98917df4',
  name: 'Fast Food',
  description: 'Very quick, and unhealthy, this might just cure your cravings.',
};

describe('cuisine Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/cuisines');

    expect(response.body).toEqual(cuisinesArray);
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/cuisines/62ce671db35b4e0c98917df4'
    );

    expect(response.body).toEqual(cuisine);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newCuisine = {
      name: 'Fast Food',
      description:
        'Very quick, and unhealthy, this might just cure your cravings.',
    };

    const response = await request('http://localhost:3000')
      .post('/cuisines')
      .send(newCuisine);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/cuisines/62ce671db35b4e0c98917df4'
    );

    expect(response.statusCode).toBe(204);
  });
});
