/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Mapper Test
 * ============================================================
 */

const {
    mapFiscalRequest
} = require(
    "../netlify/lib/fiscal/providers/checkbox/mapper"
);

const fiscalRequest = {

    customer: {

        firstName: "Іван",

        lastName: "Тестовий",

        email: "ivan@test.com",

        phone: "+380991112233"

    },

    items: [

        {

            code: "practicularium_ua",

            name: "ПРАКТИКУЛЯРІЙ",

            price: 650,

            quantity: 2,

            currency: "UAH"

        }

    ],

    payment: {

        method: "prepayment",

        amount: 1300,

        currency: "UAH"

    }

};

const checkboxRequest =
    mapFiscalRequest(fiscalRequest);

console.log();

console.log(
    "CHECKBOX REQUEST:"
);

console.log(
    JSON.stringify(
        checkboxRequest,
        null,
        4
    )
);