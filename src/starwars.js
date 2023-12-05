const axios = require('axios');

async function fetchData() {
    try {
        const response = await axios.get('https://swapi.dev/api/people/4/');
        return response.data; // Assuming the relevant data is in the 'data' property
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to indicate failure
    }
}

module.exports = fetchData;
