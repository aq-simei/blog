const axios = require("axios");

export const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
