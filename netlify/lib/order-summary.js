/**
 * ORDER-02
 * Order Summary Service
 * PRACTICULARIUM Platform
 *
 * Calculates order totals and prepares
 * summary information for emails, OMS
 * and future invoices.
 */

function calculateOrderSummary(order) {

    const quantity = Number(order.quantity || 1);

    const bookPrice = Number(order.bookPrice || 0);

    const deliveryPrice = Number(order.deliveryPrice || 0);

    const booksTotal = bookPrice * quantity;

    const grandTotal = booksTotal + deliveryPrice;

    return {

        quantity,

        bookPrice,

        booksTotal,

        deliveryPrice,

        grandTotal,

        currency: order.currency

    };

}

module.exports = {

    calculateOrderSummary

};