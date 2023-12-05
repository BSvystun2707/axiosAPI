const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const getInfo = require('../src/getInfo'); // Replace with the actual path

// Create a new instance of the mock adapter
const mock = new MockAdapter(axios);

// Describe block to group tests
describe('getInfo function', () => {
  // Mock the GET request with specific data inside "Items"
  mock.onGet('https://api.demoblaze.com/entries').reply(200, {
    Items: [
      {
        cat: 'phone',
        desc: 'Sample description for phone 1',
        id: 1,
        img: 'sample_image_1.jpg',
        price: 100,
        title: 'Phone 1'
      },
    ],
    LastEvaluatedKey: { id: '9' }
  });

  // Jest test
  test('makes a GET request and returns data', async () => {
    // Call the getInfo function
    const result = await getInfo();

    // Assert that the result matches your expected data structure
    expect(result).toEqual({
      Items: [
        {
          cat: expect.any(String),
          desc: expect.any(String),
          id: expect.any(Number),
          img: expect.any(String),
          price: expect.any(Number),
          title: expect.any(String)
        },
        // Repeat the structure for each item in the array
      ],
      LastEvaluatedKey: { id: '9' }
    });
  });

  // Cleanup the mock adapter after the test
  afterEach(() => {
    mock.reset();
  });

  // Optionally, you can also clean up the mock adapter and restore the original behavior
  afterAll(() => {
    mock.restore();
  });
});
