import request from 'supertest';
import app from '../index.js';

test('home page shows list of movies', async () => {
  const response = await request(app)
    .get('/')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
  expect(response.text.includes('Idiocracy')).toBeTruthy();
});

test('movie page shows movie details', async () => {
  const response = await request(app)
    .get('/movie/1')
    .expect(200);

  expect(response.text.includes('Shawshank')).toBeTruthy();
});