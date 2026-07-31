/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Create Fiscal Receipt
 * ============================================================
 */

const {
    runFiscalWorkflow
} = require("../lib/fiscal/fiscal-workflow");

exports.handler = async (event) => {

    try {

        console.log();

        console.log(
            "========================================"
        );

        console.log(
            "CREATE FISCAL RECEIPT"
        );

        console.log(
            "========================================"
        );

        if (

            event.httpMethod !== "POST"

        ) {

            return {

                statusCode: 405,

                headers: {

                    "Content-Type":

                        "application/json"

                },

                body: JSON.stringify({

                    success: false,

                    message:

                        "Method Not Allowed"

                })

            };

        }

        const {

            orderNumber

        } = JSON.parse(

            event.body || "{}"

        );

        if (

            !orderNumber

        ) {

            return {

                statusCode: 400,

                headers: {

                    "Content-Type":

                        "application/json"

                },

                body: JSON.stringify({

                    success: false,

                    message:

                        "Order Number Is Required"

                })

            };

        }

        console.log();

        console.log(
            "ORDER NUMBER:"
        );

        console.log(
            orderNumber
        );

        /**
         * ----------------------------------------------------
         * Fiscal Workflow
         * ----------------------------------------------------
         */

        const result =

            await runFiscalWorkflow(

                orderNumber

            );

        return {

            statusCode: result.success

                ? 200

                : 500,

            headers: {

                "Content-Type":

                    "application/json"

            },

            body: JSON.stringify(

                result

            )

        };

    }

    catch (error) {

        console.log();

        console.log(
            "CREATE FISCAL RECEIPT ERROR"
        );

        console.error(

            error

        );

        return {

            statusCode: 500,

            headers: {

                "Content-Type":

                    "application/json"

            },

            body: JSON.stringify({

                success: false,

                message:

                    error.message

            })

        };

    }

};