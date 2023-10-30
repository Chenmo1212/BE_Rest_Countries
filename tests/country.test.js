const request = require('supertest');
const app = require('../server'); // Import your Express app

describe('GET /all', () => {
    it('should return a list of all countries', async () => {
        const response = await request(app).get('/all');

        // Assert the HTTP status code
        expect(response.status).toBe(200);

        // Assert the response body
        expect(Array.isArray(response.body)).toBe(true);
    });
});

describe('GET /country/:name', () => {
    it('should return information about a specific country', async () => {
        const countryName = 'Canada'; // Replace with a valid country name
        const response = await request(app).get(`/country/${countryName}`);

        expect(response.status).toBe(200);
        expect(response.body[0].name["common"]).toBe(countryName);
    });

    it('should return a 404 status for a non-existent country', async () => {
        const nonExistentCountry = 'NonExistentCountry'; // Replace with a non-existent country name
        const response = await request(app).get(`/country/${nonExistentCountry}`);

        expect(response.status).toBe(301);
        expect(response.body.error).toBe('Not Found');
    });
});