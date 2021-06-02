const axios = require('axios').default;

//create axios instance for api calls
const api = axios.create({
    baseURL: 'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/',
    timeout: 1000
  });

async function getProducts(){
    try {
        const response = await api.get('/products');
        return response.data;
      } catch (error) {
        console.error(error);
      }
}


export {getProducts}