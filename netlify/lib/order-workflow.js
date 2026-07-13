/**
 * OMS-01
 * Order Workflow
 * PRACTICULARIUM Platform
 *
 * Official Status Transition Rules
 */

const { ORDER_STATUS } = require("./order-status");

const WORKFLOW = Object.freeze({

    [ORDER_STATUS.NEW]: [
        ORDER_STATUS.CONFIRMED,
        ORDER_STATUS.CANCELLED
    ],

    [ORDER_STATUS.CONFIRMED]: [
        ORDER_STATUS.WAITING_PREPAYMENT,
        ORDER_STATUS.CANCELLED
    ],

    [ORDER_STATUS.WAITING_PREPAYMENT]: [
        ORDER_STATUS.PAYMENT_RECEIVED,
        ORDER_STATUS.CANCELLED
    ],

    [ORDER_STATUS.PAYMENT_RECEIVED]: [
        ORDER_STATUS.PACKING
    ],

    [ORDER_STATUS.PACKING]: [
        ORDER_STATUS.SHIPPED
    ],

    [ORDER_STATUS.SHIPPED]: [
        ORDER_STATUS.DELIVERED
    ],

    [ORDER_STATUS.DELIVERED]: [
        ORDER_STATUS.COMPLETED
    ],

    [ORDER_STATUS.COMPLETED]: [],

    [ORDER_STATUS.CANCELLED]: []

});

function canChangeStatus(currentStatus, nextStatus) {

    return WORKFLOW[currentStatus]?.includes(nextStatus) ?? false;

}

module.exports = {

    WORKFLOW,

    canChangeStatus

};