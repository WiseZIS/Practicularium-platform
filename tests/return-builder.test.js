/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Builder Test
 * ============================================================
 */

require("dotenv").config();

const {

    getOrderByNumber

} = require("../netlify/lib/order-repository");

const {

    createReturnRequest

} = require("../netlify/lib/fiscal/return-builder");

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

        console.log(
            "================================="
        );

        console.log(
            "RETURN BUILDER TEST"
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

        const order =

            record.data;

        console.log();

        console.log(
            "ORDER LOADED"
        );

        console.log();

        console.log(

            JSON.stringify(

                order,

                null,

                4

            )

        );

        /**
         * ----------------------------------------------------
         * Build Return Request
         * ----------------------------------------------------
         */

        const returnRequest =

            createReturnRequest(

                order

            );

        console.log();

        console.log(
            "RETURN REQUEST"
        );

        console.log();

        console.log(

            JSON.stringify(

                returnRequest,

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