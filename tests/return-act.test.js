/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Act Test
 * ============================================================
 */

const fs = require("fs");

const {
    createReturnAct
} = require("../netlify/lib/fiscal/return-act/return-act-service");

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

        }

    }

};

const returnResult = {

    saleReceiptUuid: "SALE-UUID-123456",

    returnReceiptUuid: "RETURN-UUID-654321",

    fiscalCode: "FISCAL-000001"

};

const reason =
    "Тестове повернення";

const result = createReturnAct(

    order,

    returnResult,

    reason

);

console.log("\n======================================");
console.log("RETURN ACT TEST");
console.log("======================================\n");

console.log("Document:");

console.log(result.filePath);

console.log("");

console.log("Exists:");

console.log(

    fs.existsSync(result.filePath)

);

console.log("");

console.log("Model:");

console.log(

    JSON.stringify(

        result.model,

        null,

        4

    )

);

console.log("\n======================================");
console.log("TEST FINISHED");
console.log("======================================\n");