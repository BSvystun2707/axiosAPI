const axios = require('axios');

async function deleteProd() {
let data = JSON.stringify({
  "id": "4c0f17d3-2a9e-aeb6-3f2a-9fcd498c72fb"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.demoblaze.com/deleteitem',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
};
module.exports = deleteProd;