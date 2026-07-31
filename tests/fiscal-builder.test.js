/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Builder Test
 * ============================================================
 */

const { createFiscalRequest } =
    require("../netlify/lib/fiscal/fiscal-builder");

const order = {

    order_number: "PR-TEST-000001",

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

const fiscalRequest =
    createFiscalRequest(order);

console.log(
    JSON.stringify(
        fiscalRequest,
        null,
        4
    )
);