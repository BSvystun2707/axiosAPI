// apiReq.test.js
const axios = require('axios');
const registerUser = require('../src/apiReq');

jest.mock('axios');

describe('Registration API', () => {
  it('should register a user successfully', async () => {
    const responseData = { message: 'User registered successfully.' };

    axios.post.mockResolvedValueOnce({ data: responseData });

    // Mock console.log to track its usage
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // Call the registration function
    await registerUser();

    expect(axios.post).toHaveBeenCalledWith(
      'https://api.demoblaze.com/signup',
      expect.any(Object),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );

    // Check that console.log was called with the expected arguments
    expect(console.log).toHaveBeenCalledWith('Request Data:', expect.any(String));
    expect(console.log).toHaveBeenCalledWith('Response Data:', JSON.stringify(responseData));

    // Restore the original console.log
    console.log = originalConsoleLog;
  });
});
