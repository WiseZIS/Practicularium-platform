/**
 * PRACTICULARIUM Platform 2.0
 * Delivery Methods Dictionary
 * Shared Layer
 */

export const DELIVERY_METHOD = Object.freeze({
    NOVA_POSHTA: "nova_poshta",
    UKRPOSHTA: "ukrposhta",
    PICKUP: "pickup",
    GENOA_PERSONAL: "genoa_personal",
    ITALY_POST: "italy_post"
});

export const DELIVERY_METHOD_LABELS = Object.freeze({
    [DELIVERY_METHOD.NOVA_POSHTA]: "Нова Пошта",
    [DELIVERY_METHOD.UKRPOSHTA]: "Укрпошта",
    [DELIVERY_METHOD.PICKUP]: "Самовивіз із видавництва",
    [DELIVERY_METHOD.GENOA_PERSONAL]: "Особиста передача (Генуя)",
    [DELIVERY_METHOD.ITALY_POST]: "Поштова доставка по Італії"
});

export const DELIVERY_METHOD_OPTIONS = Object.freeze([
    {
        value: DELIVERY_METHOD.NOVA_POSHTA,
        label: DELIVERY_METHOD_LABELS[DELIVERY_METHOD.NOVA_POSHTA]
    },
    {
        value: DELIVERY_METHOD.UKRPOSHTA,
        label: DELIVERY_METHOD_LABELS[DELIVERY_METHOD.UKRPOSHTA]
    },
    {
        value: DELIVERY_METHOD.PICKUP,
        label: DELIVERY_METHOD_LABELS[DELIVERY_METHOD.PICKUP]
    },
    {
        value: DELIVERY_METHOD.GENOA_PERSONAL,
        label: DELIVERY_METHOD_LABELS[DELIVERY_METHOD.GENOA_PERSONAL]
    },
    {
        value: DELIVERY_METHOD.ITALY_POST,
        label: DELIVERY_METHOD_LABELS[DELIVERY_METHOD.ITALY_POST]
    }
]);