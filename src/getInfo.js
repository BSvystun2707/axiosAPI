 
const axios = require('axios');

  async function getInfo() {
      try {
          const response = await axios.get('https://api.demoblaze.com/entries');
          return response.data; // Assuming the relevant data is in the 'data' property
      } catch (error) {
          console.error(error);
          throw error; // Rethrow the error to indicate failure
      }
  }
  
 module.exports = getInfo;
  