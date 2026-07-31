/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Return Mapper Test
 * ============================================================
 */

require("dotenv").config();

const {

    getOrderByNumber

} = require("../netlify/lib/order-repository");

const {

    createReturnRequest

} = require("../netlify/lib/fiscal/return-builder");

const CheckboxReceiptMapper =
    require("../netlify/lib/fiscal/providers/checkbox/receipt-mapper");

async function run() {

    try {

        const orderNumber =

            "PR-20260728-150948";

        console.log();

        console.log(
            "================================="
        );

        console.log(
            "CHECKBOX RETURN MAPPER TEST"
        );

        console.log(
            "================================="
        );

        /**
         * ----------------------------------------------------
         * Load Order
         * ----------------------------------------------------
         */

        const record =

            await getOrderByNumber(

                orderNumber

            );

        /**
         * ----------------------------------------------------
         * Build Return Request
         * ----------------------------------------------------
         */

        const returnRequest =

            createReturnRequest(

                record.data

            );

        /**
         * ----------------------------------------------------
         * Map To Checkbox
         * ----------------------------------------------------
         */

        const mapper =

            new CheckboxReceiptMapper();

        const checkboxRequest =

            mapper.map(

                returnRequest

            );

        console.log();

        console.log(
            "CHECKBOX REQUEST"
        );

        console.log();

        console.log(

            JSON.stringify(

                checkboxRequest,

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