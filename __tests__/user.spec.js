const request = require('supertest');

const usersArray = [
  {
    _id: '62b9e26dc8da181ea71296d2',
    name: 'Kevin C',
    password: '12345',
    email: 'kevin@kevin.com',
  },
  {
    _id: '62b9e275c8da181ea71296d3',
    name: 'Kevin W',
    password: '12345',
    email: 'kevin@kevin.com',
  },
  {
    _id: '62b9e283c8da181ea71296d4',
    name: 'Lakeram',
    password: '12345',
    email: 'lakeram@lakeram.com',
  },
  {
    _id: '62b9e28cc8da181ea71296d5',
    name: 'Jennie',
    password: '12345',
    email: 'jennie@jennie.com',
  },
  {
    _id: '62b9e29cc8da181ea71296d6',
    name: 'Tanner',
    password: '12345',
    email: 'tanner@tanner.com',
  },
  {
    _id: '62c5a78338aa500011a667c9',
    tenant: 'dev-wnikcd0y',
    connection: 'MongoDB',
    email: 'test@gmail.com',
    password: '$2b$10$hWEB06E206Lh0YrdsRjSeOjuYwwzTxQaTQkDTw6DiB0zSHnmZFeJu',
    debug: true,
  },
  {
    _id: '62ced74d94bbe49ac667cf8d',
    name: 'Test User',
    password: '12345',
    email: 'test@test.com',
  },
  {
    _id: '62ced867ced931358aaea4b4',
    name: 'Jon Smith',
    password: '12345',
    email: 'test@gmail.com',
  },
];

const user = {
  _id: '62ced867ced931358aaea4b4',
  name: 'Jon Smith',
  password: '12345',
  email: 'test@gmail.com',
};

describe('user Test Suite', () => {
  it('test get / endpoints', async () => {
    const response = await request('http://localhost:3000').get('/users');

    expect(response.body).toEqual(usersArray);
    expect(response.statusCode).toBe(200);
  });

  it('test get /:id endpoints', async () => {
    const response = await request('http://localhost:3000').get(
      '/users/62ced867ced931358aaea4b4'
    );
    expect(response.body).toEqual(user);
    expect(response.statusCode).toBe(200);
  });

  it('test post / endpoints', async () => {
    const newUser = {
      name: 'Test User',
      password: '12345',
      email: 'test@test.com',
    };

    const response = await request('http://localhost:3000')
      .post('/users')
      .send(newUser);
    expect(response.statusCode).toBe(201);
  });

  it('test delete /:id endpoints', async () => {
    const response = await request('http://localhost:3000').delete(
      '/users/62ced867ced931358aaea4b4'
    );
    expect(response.statusCode).toBe(204);
  });
});
