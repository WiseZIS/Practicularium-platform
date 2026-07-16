/**
 * PRACTICULARIUM Platform 2.0
 * Payment Methods Dictionary
 * Shared Layer
 */

export const PAYMENT_METHOD = Object.freeze({
    FULL_PREPAYMENT: "full-prepayment",
    COD_DELIVERY_PREPAYMENT: "cod-delivery-prepayment"
});

export const PAYMENT_METHOD_LABELS = Object.freeze({
    [PAYMENT_METHOD.FULL_PREPAYMENT]:
        "Повна передоплата",

    [PAYMENT_METHOD.COD_DELIVERY_PREPAYMENT]:
        "Післяплата + передоплата доставки"
});

export const PAYMENT_METHOD_OPTIONS = Object.freeze([
    {
        value: PAYMENT_METHOD.FULL_PREPAYMENT,
        label: PAYMENT_METHOD_LABELS[PAYMENT_METHOD.FULL_PREPAYMENT]
    },
    {
        value: PAYMENT_METHOD.COD_DELIVERY_PREPAYMENT,
        label: PAYMENT_METHOD_LABELS[PAYMENT_METHOD.COD_DELIVERY_PREPAYMENT]
    }
]);