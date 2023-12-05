const axios = require('axios');
const deleteProd = require('../src/delete');

jest.mock('axios');

describe('Delete Product API', () => {
  it('should delete a product successfully', async () => {
    // Define responseData
    const responseData = { message: 'Product deleted successfully.' };

    // Mock the axios.request method to simulate a successful product deletion
    jest.spyOn(axios, 'request').mockResolvedValueOnce({ data: responseData, status: 200 });

    // Call the deleteProd function
    await deleteProd();

    // Verify that the axios.request method was called with the correct data
    expect(axios.request).toHaveBeenCalledWith({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.demoblaze.com/deleteitem',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify({
        "id": "4c0f17d3-2a9e-aeb6-3f2a-9fcd498c72fb"
      }),
    });

  });
});
