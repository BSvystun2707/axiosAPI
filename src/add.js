const axios = require('axios');

async function addProd() {

let data = JSON.stringify({
  "id": "4c0f17d3-2a9e-aeb6-3f2a-9fcd498c72fb",
  "cookie": "Y2lnZXcxNzAxOTY3",
  "prod_id": 3,
  "flag": true
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://api.demoblaze.com/addtocart',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Basic Y2lnZXcxNzAxOTY3'
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

module.exports = addProd;