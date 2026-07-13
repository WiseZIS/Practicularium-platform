const { DELIVERY_CONFIG } = require("../delivery/delivery-config");

/**
 * DELIVERY-03
 * Delivery Service
 * PRACTICULARIUM Platform
 */

async function calculateDelivery(options) {

    const {

        carrier,
        city,
        quantity,
        weight,
        paymentMethod

    } = options;

    const config = DELIVERY_CONFIG[carrier];

    if (!config) {

        throw new Error(`Unknown carrier: ${carrier}`);

    }

    return {

        carrier,

        city,

        quantity,

        weight,

        paymentMethod,

        price: config.price,

        currency: config.currency

    };

}

module.exports = {

    calculateDelivery

};