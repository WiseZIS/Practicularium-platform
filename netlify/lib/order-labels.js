/**
 * ORDER-01
 * Display Labels Dictionary
 * PRACTICULARIUM Platform
 *
 * Human-readable labels for orders.
 * Used in:
 * - Customer Email
 * - Owner Email
 * - OMS
 * - Future PDF documents
 */

const DELIVERY_LABELS = Object.freeze({

    nova_poshta: "Нова Пошта",

    ukrposhta: "Укрпошта",

    pickup: "Самовивіз із видавництва",

    genoa_personal: "Особиста передача (Генуя)",

    italy_post: "Поштова доставка по Італії"

});

const PAYMENT_LABELS = Object.freeze({

    "full-prepayment":
        "Повна передоплата книги",

    "cod-delivery-prepayment":
        "Післяплата (накладений платіж) + передоплата доставки"

});

const COUNTRY_LABELS = Object.freeze({

    UA: "Україна",

    IT: "Італія"

});

const CURRENCY_LABELS = Object.freeze({

    UAH: "UAH (Українська гривня)",

    EUR: "EUR (Євро)"

});

module.exports = {

    DELIVERY_LABELS,

    PAYMENT_LABELS,

    COUNTRY_LABELS,

    CURRENCY_LABELS

};