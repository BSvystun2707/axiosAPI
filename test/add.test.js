const axios = require('axios');
const addProd = require('../src/add');

jest.mock('axios');

describe('Add Product to Cart API', () => {
  it('should add a product to the cart successfully', async () => {
    // Define responseData
    const responseData = { message: 'Product added to cart successfully.' };

    // Mock the axios.request method to simulate a successful product addition
    jest.spyOn(axios, 'request').mockResolvedValueOnce({ data: responseData, status: 200 });

    // Call the addProd function
    await addProd();

    // Verify that the axios.request method was called with the correct data
    expect(axios.request).toHaveBeenCalledWith({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.demoblaze.com/addtocart',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic Y2lnZXcxNzAxOTY3'
      },
      data: expect.any(String),
    });

    // Check that the response status code is 200
   // Check that the response status code is 200

// Check that the response status code is 200




    // You can add more assertions based on the expected behavior of adding a product
  });
  
});
