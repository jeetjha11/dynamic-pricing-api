
const { Pricing, Organization, Item } = require('../models');

async function calculatePrice(zone, organizationId, totalDistance, itemType) {
    try {
        const pricing = await Pricing.findOne({
            where: {
                organizationId,
                zone
            },
            include: [Organization, Item]
        });

        const basePrice = pricing.fixPrice;
        const perKmPrice = itemType === 'perishable' ? pricing.kmPricePerishable : pricing.kmPriceNonPerishable;

        const totalPrice = basePrice + (totalDistance - pricing.baseDistanceInKm) * perKmPrice;

        return totalPrice;
    } catch (error) {
        throw new Error('Error calculating price');
    }
}

module.exports = { calculatePrice };
