
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { calculatePricing } = require('./Controllers/PricingController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/pricing', calculatePricing);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
