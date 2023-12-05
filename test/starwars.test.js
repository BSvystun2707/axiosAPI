const axios = require('axios');
const fetchData = require('../src/starwars'); // Replace with the actual module path

jest.mock('axios');

describe('Fetching Data from SWAPI', () => {
    it('fetches successfully data from SWAPI', async () => {
        // Mocking the Axios request to simulate a successful response
        axios.get.mockResolvedValueOnce({
            data: {
                name: 'Darth Vader',
                height: '202',
                mass: '136',
                hair_color: 'none',
                skin_color: 'white',
                eye_color: 'yellow',
                birth_year: '41.9BBY',
                gender: 'male',
            },
        });
    
        // Calling the function that makes the Axios request
        const result = await fetchData();
    
        // Verifying that the Axios request was called with the correct URL
        expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/4/');
    
        // Verifying other expectations based on the response data
        expect(result).toEqual({
            name: 'Darth Vader',
            height: '202',
            mass: '136',
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            gender: 'male',
        });
    });
    

  it('fetches erroneously data from SWAPI', async () => {
    // Mocking the Axios request to simulate an error response
    axios.request.mockRejectedValueOnce(new Error('Request failed'));
  });

  it('returns correct name value', async () => {
    // Mocking the Axios request to simulate a successful response
    axios.get.mockResolvedValueOnce({
        data: {
            name: 'Darth Vader',
            // ... other properties
        },
    });

    // Calling the function that makes the Axios request
    const result = await fetchData();

    // Verifying that the Axios request was called with the correct URL
    expect(axios.get).toHaveBeenCalledWith('https://swapi.dev/api/people/4/');

    // Verifying that the result is an object with the expected properties
    expect(result).toEqual({
        name: 'Darth Vader',
        // ... other properties
    });
});

});
