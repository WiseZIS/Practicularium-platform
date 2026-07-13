const { DELIVERY_CARRIERS } = require("./carriers");
const { DELIVERY_CONFIG } = require("./delivery-config");

const { getProvider } = require("./providers");

function calculateDelivery({
    carrier,
    weight,
    destination
}) {
    const config = DELIVERY_CONFIG[carrier];

    if (!config) {
        throw new Error(`Unsupported delivery carrier: ${carrier}`);
    }

    const service = config.warehouse;

const provider = getProvider(carrier);

const result = provider.calculate({
    weight,
    destination,
    config: service
});

    return {
        success: true,
        carrier,
        destination,
        deliveryPrice: result.price,
        currency: service.currency,
        estimatedDays: service.estimatedDays
    };
}

module.exports = {
    calculateDelivery
};