/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Document Gateway
 * Get Document
 * ============================================================
 */

const fs =
    require("fs");

const { getOrderByNumber } =
    require("../lib/order-repository");

exports.handler = async (event) => {

    try {

        /**
         * ----------------------------------------------------
         * Parameters
         * ----------------------------------------------------
         */

        const {

            orderNumber,

            type

        } = event.queryStringParameters || {};

        if (

            !orderNumber ||

            !type

        ) {

            return {

                statusCode: 400,

                body: JSON.stringify({

                    error: "orderNumber and type are required."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Get Order
         * ----------------------------------------------------
         */

        const order =

            await getOrderByNumber(

                orderNumber

            );

        if (

            !order

        ) {

            return {

                statusCode: 404,

                body: JSON.stringify({

                    error: "Order not found."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Select Document
         * ----------------------------------------------------
         */

        let documentPath = null;

        switch (type) {

            case "receipt":

                documentPath =

                    order.data?.fiscal?.receiptPath;

                break;

            default:

                return {

                    statusCode: 400,

                    body: JSON.stringify({

                        error: "Unsupported document type."

                    })

                };

        }

        /**
         * ----------------------------------------------------
         * Validate Path
         * ----------------------------------------------------
         */

        if (

            !documentPath

        ) {

            return {

                statusCode: 404,

                body: JSON.stringify({

                    error: "Document is not available."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * File Exists
         * ----------------------------------------------------
         */

        if (

            !fs.existsSync(

                documentPath

            )

        ) {

            return {

                statusCode: 404,

                body: JSON.stringify({

                    error: "Document file not found."

                })

            };

        }

        /**
         * ----------------------------------------------------
         * Read PDF
         * ----------------------------------------------------
         */

        const pdf =

            fs.readFileSync(

                documentPath

            );

        /**
         * ----------------------------------------------------
         * Return PDF
         * ----------------------------------------------------
         */

        return {

            statusCode: 200,

            headers: {

                "Content-Type":

                    "application/pdf",

                "Content-Disposition":

                    'inline; filename="Receipt.pdf"'

            },

            body:

                pdf.toString(

                    "base64"

                ),

            isBase64Encoded: true

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