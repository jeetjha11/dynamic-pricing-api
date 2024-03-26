// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json'); 


const app = express();
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.post('/calculate-price', (req, res) => {
  const totalPrice = calculatePrice(req.body);
  res.json({ total_price: totalPrice });
});


function calculatePrice(requestBody) {
  const baseDistance = 5;
  const basePrice = 10;
  const perKmPrice = requestBody.item_type === "perishable" ? 1.5 : 1;
  const totalDistance = requestBody.total_distance;
  const totalPrice = basePrice + perKmPrice * (totalDistance - baseDistance);
  return totalPrice.toFixed(2); 
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
