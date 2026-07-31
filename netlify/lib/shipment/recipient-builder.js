/**
 * ============================================================
 * Shipment Recipient Builder
 * ============================================================
 */

function buildRecipient(order) {

    return {

        country: order.product.country,

        city: order.delivery.city,

        cityRef: order.delivery.cityRef,

        warehouse: order.delivery.warehouse,

        warehouseRef: order.delivery.warehouseRef

    };

}

module.exports = {

    buildRecipient

};