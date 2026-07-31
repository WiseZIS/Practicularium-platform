/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Notification Types
 * ============================================================
 */

const NOTIFICATION_TYPES = {

    /**
     * --------------------------------------------------------
     * Order Lifecycle
     * --------------------------------------------------------
     */

    ORDER_CREATED:
        "ORDER_CREATED",

    ORDER_CONFIRMED:
        "ORDER_CONFIRMED",

    PAYMENT_CONFIRMED:
        "PAYMENT_CONFIRMED",

    SHIPMENT_CREATED:
        "SHIPMENT_CREATED",

    ORDER_SHIPPED:
        "ORDER_SHIPPED",

    ORDER_DELIVERED:
        "ORDER_DELIVERED",

    ORDER_RETURNED:
        "ORDER_RETURNED",

    /**
     * --------------------------------------------------------
     * Fiscal
     * --------------------------------------------------------
     */

    CUSTOMER_RECEIPT:
        "CUSTOMER_RECEIPT",

    RETURN_RECEIPT:
        "RETURN_RECEIPT"

};

module.exports = {

    NOTIFICATION_TYPES

};