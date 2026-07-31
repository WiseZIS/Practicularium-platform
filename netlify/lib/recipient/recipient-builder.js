/**
 * ============================================================
 * Recipient Builder
 * ============================================================
 */

function buildRecipientProfile(order) {

    return {

        firstName: order.customer.firstName,

        lastName: order.customer.lastName,

        middleName: "",

        phone: order.customer.phone,

        email: order.customer.email,

        country: order.delivery.country,

        city: order.delivery.city,

        cityRef: order.delivery.cityRef,

        warehouse: order.delivery.warehouse,

        warehouseRef: order.delivery.warehouseRef

    };

}

module.exports = {

    buildRecipientProfile

};