const axios = require('axios');
const Chance = require('chance');

const chance = new Chance();

async function registerUser() {
  try {
    const nam = chance.word();
    const pas = chance.string();

    const data = {
      username: nam,
      password: pas
    };

    const response = await axios.post('https://api.demoblaze.com/signup', data, {
      headers: { 
        'Content-Type': 'application/json'
      }
    });

    console.log('Request Data:', JSON.stringify(data));
    console.log('Response Data:', JSON.stringify(response.data));
    
    return {
      username: nam,
      password: pas,
    };
  } catch (error) {
    console.error('Error:', error.message || error);
    throw error;
  }
}

module.exports = registerUser;
