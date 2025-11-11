import {test, expect} from '@playwright/test';

/*
Test to make an API GET call
*/
test('API GET call', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

/*
Test to make an API POST call
*/
test('API POST call', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Playwright API Test',
      body: 'This is a test',
      userId: 1
    }
  });
  expect(response.status()).toBe(201);
  const responseBody = await response.json();
  console.log(responseBody);
});

/*
API call with Auth headers
*/
test('API call with headers', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1', {
    headers: {
      'Authorization': 'Bearer your-token'
    }
  });
  expect(response.status()).toBe(200);
});
