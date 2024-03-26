// controllers/PricingController.js
const { calculatePrice } = require('../services/PricingService');

async function calculatePricing(req, res) {
  const { zone, organizationId, totalDistance, itemType } = req.body;

  try {
    const totalPrice = await calculatePrice(zone, organizationId, totalDistance, itemType);
    res.json({ total_price: totalPrice });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { calculatePricing };
