// apiLog.js
const axios = require('axios');
const { nam, pas } = require('./apiReq');

async function loginUser() {
  let data = JSON.stringify({
    "username": "cigew",
    "password": "eU7EKch"
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://api.demoblaze.com/login',
    headers: {
      'Content-Type': 'application/json'
    },
    data: data
  };

  try {
    const response = await axios.post(config);
    console.log(JSON.stringify(response.data));
    return response.data; // You can return the response data or any relevant information
  } catch (error) {
    console.log(error);
    throw error;
  }
}

module.exports = loginUser;
