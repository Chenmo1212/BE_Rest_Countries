const express = require('express');
const axios = require('axios');
const app = express();
const port = 3001;

app.use(express.json());

// Define a route to fetch country information
app.get('/country/:name', async (req, res) => {
    try {
        const countryName = req.params.name;
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`);
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
