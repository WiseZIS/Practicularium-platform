/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Create Return
 * ============================================================
 */

const {
    getOrderByNumber
} = require("../lib/order-repository");

const {
    runReturnWorkflow
} = require("../lib/fiscal/return-workflow");

exports.handler = async (

    event

) => {

    try {

        /**
         * ----------------------------------------------------
         * Parse Request
         * ----------------------------------------------------
         */

        const {

            orderNumber

        } = JSON.parse(

            event.body

        );

        if (

            !orderNumber

        ) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    success: false,

                    message:

                        "Order number is required."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Load Order
         * ----------------------------------------------------
         */

        const record =

            await getOrderByNumber(

                orderNumber

            );

        if (

            !record

        ) {

            return {

                statusCode: 404,

                body: JSON.stringify({

                    success: false,

                    message:

                        "Order not found."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Run Return Workflow
         * ----------------------------------------------------
         */

        const result =

            await runReturnWorkflow(

                record.data

            );

        /**
         * ----------------------------------------------------
         * Response
         * ----------------------------------------------------
         */

        return {

            statusCode: result.success ? 200 : 500,

            body: JSON.stringify(

                result

            )

        };

    }

    catch (error) {

        console.error(

            error

        );

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                message:

                    error.message

            })

        };

    }

};