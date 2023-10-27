const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

// Define a route to fetch all countries
router.get('/all', countryController.getAllCountries);

// Define a route to fetch country information
router.get('/country/:name', countryController.getCountryData);

// Define a route for API instructions
router.get('/', countryController.getInstructions);

module.exports = router;
