/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Workflow Integration Test
 * ============================================================
 */

require("dotenv").config();

const checkbox =
    require("../netlify/lib/fiscal/providers/checkbox/client");

const storage =
    require("../netlify/lib/storage/storage");

const { createFiscalRequest } =
    require("../netlify/lib/fiscal/fiscal-builder");

/**
 * ------------------------------------------------------------
 * Test Order
 * ------------------------------------------------------------
 */

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

(async () => {

    try {

        console.log();

        console.log(
            "========================================"
        );

        console.log(
            "SPRINT 10 - FISCAL WORKFLOW TEST"
        );

        console.log(
            "========================================"
        );

        console.log();

        console.log(
            "Building Fiscal Request..."
        );

        const fiscalRequest =
            createFiscalRequest(order);

        console.log();

        console.log(
            "FISCAL REQUEST:"
        );

        console.dir(
            fiscalRequest,
            {
                depth: null
            }
        );

        console.log();

        console.log(
            "Creating Receipt..."
        );

        const receipt =
            await checkbox.createReceipt(
                fiscalRequest
            );

        console.log();

        console.log(
            "CREATE RECEIPT RESULT:"
        );

        console.dir(
            receipt,
            {
                depth: null
            }
        );

        console.log();

        console.log(
            "WAITING RECEIPT DONE..."
        );

        const completedReceipt =
            await checkbox.waitReceiptDone(
                receipt.id
            );

        console.log();

        console.log(
            "DONE RESULT:"
        );

        console.dir(
            completedReceipt,
            {
                depth: null
            }
        );

        console.log();

        console.log(
            "DOWNLOADING RECEIPT PDF..."
        );

        const pdf =
            await checkbox.getReceiptPdf(
                receipt.id
            );

        console.log();

        console.log(
            "PDF RECEIVED"
        );

        console.log(
            `PDF Size: ${pdf.length} bytes`
        );

        console.log();

        console.log(
            "SAVING RECEIPT PDF..."
        );

        const filePath =
            storage.saveReceiptPdf(

                order.order_number,

                pdf

            );

        console.log();

        console.log(
            "PDF SAVED:"
        );

        console.log(
            filePath
        );

    }
    catch (error) {

        console.log();

        console.log(
            "TEST ERROR:"
        );

        console.error(error);

    }

})();