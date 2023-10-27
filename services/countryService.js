const axios = require('axios');

const BASE_URL = 'https://restcountries.com/v3.1';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  timeout: 60 * 1000,
});

const getAllCountries = async () => {
  const response = await api.get('/all');
  return response.data;
};

const getCountryData = async (name) => {
  try {
    const response = await api.get(`/name/${name}?fullText=true`);
    return response.data;
  } catch (e) {
    throw e;
  }
};

module.exports = { getAllCountries, getCountryData };
