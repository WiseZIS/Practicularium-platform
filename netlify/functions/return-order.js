/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Order Function
 * ============================================================
 */

const {
    runReturnWorkflow
} = require("../lib/fiscal/return-workflow");

exports.handler = async (event) => {

    try {

        const orderNumber =

            event.queryStringParameters?.orderNumber;

        if (!orderNumber) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    success: false,

                    error: "orderNumber is required."

                })

            };

        }

        const result =

            await runReturnWorkflow(

                orderNumber

            );

        return {

            statusCode: 200,

            body: JSON.stringify(

                result,

                null,

                4

            )

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                error: error.message

            })

        };

    }

};