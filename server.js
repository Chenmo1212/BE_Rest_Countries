const express = require('express');
const app = express();
const port = 3001;

const countryRoutes = require('./routes/countryRoutes');
const errorHandling = require('./middleware/errorHandling');

app.use(express.json());

// Routes
app.use('/', countryRoutes);

// Error handling middleware
app.use(errorHandling);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
