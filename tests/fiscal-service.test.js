/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Service Test
 * ============================================================
 */

const {
    createFiscalReceipt
} = require("../netlify/lib/fiscal/fiscal-service");

const order = {

    order_number: "PR-TEST-000002",

    created_at: new Date().toISOString(),

    data: {

        customer: {

            firstName: "Іван",

            lastName: "Тестовий",

            email: "ivan@test.com",

            phone: "+380991112233"

        },

        product: {

            id: "practicularium_ua",

            title: "ПРАКТИКУЛЯРІЙ",

            price: 650,

            quantity: 2,

            currency: "UAH"

        },

        pricing: {

            products: 1300,

            delivery: 120,

            total: 1420,

            currency: "UAH"

        },

        payment: {

            method: "prepayment"

        }

    }

};

(async () => {

    const result =
        await createFiscalReceipt(order);

    console.log();

    console.log(
        "FINAL RESULT:"
     );

    console.log(
        JSON.stringify(
           result,
           null,
           4
        )
    );

})();