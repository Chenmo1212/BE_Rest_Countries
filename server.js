const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

// Define a route to fetch all countries
app.get('/all', async (req, res) => {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        const countries = response.data;
        res.json(countries);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Define a route to fetch country data by name
app.get('/name/:name', async (req, res) => {
    try {
        const countryName = req.params.name;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const countryData = response.data[0]; // Assuming the first result is the correct country

        if (!countryData) {
            res.status(404).json({ error: 'Country not found' });
            return;
        }

        res.json(countryData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
