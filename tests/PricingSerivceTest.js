
const { calculatePrice } = require('../services/PricingService');

test('Calculate price for a given zone, organization, distance, and item type', async () => {
    const totalPrice = await calculatePrice('central', '005', 12, 'perishable');
    expect(totalPrice).toBe(20.5);
});
