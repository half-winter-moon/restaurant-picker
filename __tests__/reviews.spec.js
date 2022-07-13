const request = require('supertest');

const reviewsArray = [
  {
    _id: '62b9e5d45b60a18abcc2bb35',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3b1ec43a09d87a02deb8',
    postedBy: '62b9e26dc8da181ea71296d2',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Kevin C about the Mexican restaurant',
  },
  {
    _id: '62cc3b42c43a09d87a02deb9',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3b74c43a09d87a02deba',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3bcfc43a09d87a02debb',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3bddc43a09d87a02debd',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3c81c43a09d87a02debf',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3d04c43a09d87a02dec2',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3d2ec43a09d87a02dec3',
    postedBy: '62b9e29cc8da181ea71296d6',
    restaurantId: '62b9d069a723d8b5d45f6a07',
    content: 'This is a review by Tanner about the Mexican restaurant',
  },
  {
    _id: '62cc3e39b16ca999a72c36f1',
    postedBy: '62b9e283c8da181ea71296d4',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Lakeram about the Southern restaurant',
  },
  {
    _id: '62cc3e50b16ca999a72c36f4',
    postedBy: '62b9e283c8da181ea71296d4',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Lakeram about the Southern restaurant',
  },
  {
    _id: '62cc3ededbcdeaf8ae5a6f17',
    postedBy: '62b9e28cc8da181ea71296d5',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Jennie about the Southern restaurant',
  },
  {
    _id: '62cc3f77dbcdeaf8ae5a6f18',
    postedBy: '62b9e28cc8da181ea71296d5',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Jennie about the Southern restaurant',
  },
  {
    _id: '62ced35c74545c504ca7dff5',
    postedBy: '62b9e28cc8da181ea71296d5',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Jennie about the Southern restaurant',
  },
  {
    _id: '62ced74e94bbe49ac667cf8f',
    postedBy: '62b9e28cc8da181ea71296d5',
    restaurantId: '62b3b24e2174cc0c56ab33b5',
    content: 'This is a review by Jennie about the Southern restaurant',
  },
];

const review = {
  _id: '62ced74e94bbe49ac667cf8f',
  postedBy: '62b9e28cc8da181ea71296d5',
  restaurantId: '62b3b24e2174cc0c56ab33b5',
  content: 'This is a review by Jennie about the Southern restaurant',
};

describe('Reviews Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/reviews');

    expect(response.body).toEqual(reviewsArray);
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/reviews/62ced74e94bbe49ac667cf8f'
    );

    expect(response.body).toEqual(review);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newReview = {
      postedBy: '62b9e28cc8da181ea71296d5',
      restaurantId: '62b3b24e2174cc0c56ab33b5',
      content: 'This is a review by Jennie about the Southern restaurant',
    };

    const response = await request('http://localhost:3000')
      .post('/reviews')
      .send(newReview);

    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/reviews/62ced74e94bbe49ac667cf8f'
    );
    expect(response.statusCode).toBe(204);
  });
});
