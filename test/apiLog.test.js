// apiReq.test.js
const axios = require('axios');
const loginUser = require('../src/apiLog');

jest.mock('axios');

describe('Login API', () => {
  it('should login a user successfully', async () => {
    axios.post.mockResolvedValueOnce({ data: { message: 'User logged in successfully.' } });

    // Call the login function
    await loginUser();

    expect(axios.post).toHaveBeenCalledWith({
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://api.demoblaze.com/login', 
      headers: { 'Content-Type': 'application/json' },
      data: expect.any(String) 
    });
    
  });
  it('login funct should be called 1 time', async () => {
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
  it('login func should be called', async () => {
    expect(axios.post).toHaveBeenCalled();
  });
});
