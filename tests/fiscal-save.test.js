/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Repository Test
 * ============================================================
 */

require("dotenv").config();

const {

    saveFiscalResult,

    getOrderByNumber

} = require("../netlify/lib/order-repository");

async function run() {

    try {

        /**
         * ----------------------------------------------------
         * Existing Test Order
         * ----------------------------------------------------
         */

        const orderNumber =

            "PR-20260728-150948";

        console.log();
        console.log("=================================");
        console.log("FISCAL REPOSITORY TEST");
        console.log("=================================");

        /**
         * ----------------------------------------------------
         * Save Fiscal Data
         * ----------------------------------------------------
         */

        await saveFiscalResult(

            orderNumber,

            {

                provider:

                    "checkbox",

                receiptId:

                    "TEST-RECEIPT-ID",

                receiptPath:

                    "orders/PR-20260728-150948/Receipt.pdf",

                result: {

                    receiptNumber:

                        "TEST-000001",

                    fiscalNumber:

                        "FN-000001",

                    createdAt:

                        new Date().toISOString()

                }

            }

        );

        console.log();
        console.log("Fiscal data saved.");

        /**
         * ----------------------------------------------------
         * Read Order Again
         * ----------------------------------------------------
         */

        const order =

            await getOrderByNumber(

                orderNumber

            );

        console.log();
        console.log("UPDATED ORDER:");
        console.log();

        console.log(

            JSON.stringify(

                order.data.fiscal,

                null,

                4

            )

        );

    }

    catch (error) {

        console.error(error);

    }

}

run();