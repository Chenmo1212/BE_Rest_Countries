const countryService = require('../services/countryService');

// Handle route logic
const getInstructions = (req, res) => {
    const instructions = {
        message: 'Welcome to the Rest Country Information API',
        endpoints: {
            getAllCountries: '/all - Get a list of all countries',
            getCountryData: '/:name - Get information about a specific country by name',
        },
    };
    res.json(instructions);
};

const getAllCountries = async (req, res) => {
    try {
        const countries = await countryService.getAllCountries();
        res.json(countries);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getCountryData = async (req, res) => {
    try {
        const countryName = req.params.name;
        const countryData = await countryService.getCountryData(countryName);
        res.json(countryData);
    } catch (error) {
        if (error.response.data.status === 404) return res.status(404).json({error: error.response.data.message})
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { getInstructions, getAllCountries, getCountryData };
