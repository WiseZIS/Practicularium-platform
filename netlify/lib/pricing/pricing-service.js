/**
 * PRICING-01
 * Pricing Service
 * PRACTICULARIUM Platform
 */

function calculatePricing({

    product,
    quantity,
    delivery

}) {

    const booksTotal = product.price * quantity;

    const deliveryPrice = delivery.deliveryPrice;

    const total = booksTotal + deliveryPrice;

    return {

        productPrice: product.price,

        booksTotal,

        deliveryPrice,

        total,

        currency: product.currency

    };

}

module.exports = {

    calculatePricing

};