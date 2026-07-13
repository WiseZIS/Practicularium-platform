const { DELIVERY_CARRIERS } = require("./carriers");
const { DELIVERY_SERVICES } = require("./delivery-services");

/**
 * DELIVERY-02
 * Temporary Delivery Configuration
 * (Stub before API integration)
 */

const DELIVERY_CONFIG = Object.freeze({

    [DELIVERY_CARRIERS.NOVA_POSHTA]: {

        [DELIVERY_SERVICES.WAREHOUSE]: {

            currency: "UAH",

            estimatedDays: 2,

            tariffs: [
                { maxWeight: 2, price: 80 },
                { maxWeight: 5, price: 95 },
                { maxWeight: 10, price: 120 },
                { maxWeight: Infinity, price: 160 }
            ]

        }

    },

    [DELIVERY_CARRIERS.UKRPOSHTA]: {

        [DELIVERY_SERVICES.WAREHOUSE]: {

            currency: "UAH",

            estimatedDays: 4,

            tariffs: [
                { maxWeight: 2, price: 60 },
                { maxWeight: 5, price: 75 },
                { maxWeight: 10, price: 95 },
                { maxWeight: Infinity, price: 130 }
            ]

        }

    },

    [DELIVERY_CARRIERS.PICKUP]: {

        [DELIVERY_SERVICES.WAREHOUSE]: {

            currency: "UAH",

            estimatedDays: 0,

            tariffs: [
                { maxWeight: Infinity, price: 0 }
            ]

        }

    },

    [DELIVERY_CARRIERS.GENOA_PERSONAL]: {

        [DELIVERY_SERVICES.WAREHOUSE]: {

            currency: "EUR",

            estimatedDays: 0,

            tariffs: [
                { maxWeight: Infinity, price: 0 }
            ]

        }

    },

    [DELIVERY_CARRIERS.ITALY_POST]: {

        [DELIVERY_SERVICES.WAREHOUSE]: {

            currency: "EUR",

            estimatedDays: 0,

            tariffs: [
                { maxWeight: Infinity, price: 0 }
            ]

        }

    }

});

module.exports = {
    DELIVERY_CONFIG
};