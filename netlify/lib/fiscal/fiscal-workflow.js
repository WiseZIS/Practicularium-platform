/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Workflow Service
 * ============================================================
 */

const {
    createFiscalRequest
} = require("./fiscal-builder");

const fiscalEngine =
    require("./fiscal-engine");

const SaveReceiptPdf =
    require("./save-pdf");

const notification =
    require("../notification");

const {
    NOTIFICATION_TYPES
} = require("../notification/notification-types");

const {
    buildFiscalResult
} = require("./fiscal-result-builder");

const {
    getOrderByNumber,
    saveFiscalResult
} = require("../order-repository");

async function runFiscalWorkflow(

    orderNumber

) {

    try {

        console.log();

        console.log(
            "========================================"
        );

        console.log(
            "FISCAL WORKFLOW"
        );

        console.log(
            "========================================"
        );

        /**
         * ----------------------------------------------------
         * Load Order
         * ----------------------------------------------------
         */

        const dbOrder =

            await getOrderByNumber(

                orderNumber

            );

        if (!dbOrder) {

            throw new Error(

                `Order ${orderNumber} not found`

            );

        }

        const order =

            dbOrder.data;

        /**
         * ----------------------------------------------------
         * Protection Against Duplicate Fiscalization
         * ----------------------------------------------------
         */

        if (

            order.fiscal?.receiptId

        ) {

            console.log();
            console.log("========================================");
            console.log("DUPLICATE FISCALIZATION BLOCKED");
            console.log("========================================");
            console.log("Order:", order.meta.orderNumber);
            console.log("Receipt ID:", order.fiscal.receiptId);
            console.log("Receipt Number:", order.fiscal.receiptNumber);
            console.log();

            return {

                success: false,

                provider: "checkbox",

                receiptId:

                    order.fiscal.receiptId,

                receiptPath:

                    order.fiscal.receiptPath ||

                    null,

                result:

                    null,

                error:

                    "Fiscal receipt already exists."

            };

        }

        /**
         * ----------------------------------------------------
         * Build Fiscal Request
         * ----------------------------------------------------
         */

        const fiscalRequest =

            await createFiscalRequest(

                order.meta.orderNumber

            );

        /**
         * ----------------------------------------------------
         * Fiscalization
         * ----------------------------------------------------
         */

        const context =

            await fiscalEngine.fiscalize(

                fiscalRequest

            );

        /**
         * ----------------------------------------------------
         * Download Receipt PDF
         * ----------------------------------------------------
         */

        const pdfBuffer =

            await fiscalEngine.downloadReceiptPdf(

                context.receiptId

            );

        /**
         * ----------------------------------------------------
         * Save Receipt PDF
         * ----------------------------------------------------
         */

        const receiptPath =

            SaveReceiptPdf.save(

                order.meta.orderNumber,

                pdfBuffer

            );

        /**
         * ----------------------------------------------------
         * Send Receipt To Customer
         * ----------------------------------------------------
         */

        await notification.send(

            NOTIFICATION_TYPES.CUSTOMER_RECEIPT,

            {

                order,

                attachments: [

                    {

                        filename:

                            "Receipt.pdf",

                        path:

                            receiptPath

                    }

                ]

            }

        );

        /**
         * ----------------------------------------------------
         * Build Result
         * ----------------------------------------------------
         */

        const result =

            buildFiscalResult({

                provider:

                    "checkbox",

                receipt:

                    context.receipt,

                receiptPath,

                emailSent:

                    true,

                error:

                    null

            });

        /**
         * ----------------------------------------------------
         * Save Fiscal Result
         * ----------------------------------------------------
         */

        await saveFiscalResult(

            order.meta.orderNumber,

            {

                provider:

                    "checkbox",

                receiptId:

                    context.receiptId,

                receiptPath,

                result

            }

        );

        console.log();

        console.log(
            "FISCAL RESULT SAVED"
        );

        console.log();

        console.log(
            "FISCAL WORKFLOW COMPLETED"
        );

        return {

            success: true,

            provider:

                "checkbox",

            receiptId:

                context.receiptId,

            receiptPath,

            result,

            error:

                null

        };

    }

    catch (error) {

        console.log();

        console.log(
            "FISCAL WORKFLOW ERROR"
        );

        console.error(
            error
        );

        return {

            success: false,

            provider:

                "checkbox",

            receiptId:

                null,

            receiptPath:

                null,

            result:

                null,

            error:

                error.message

        };

    }

}

module.exports = {

    runFiscalWorkflow

};