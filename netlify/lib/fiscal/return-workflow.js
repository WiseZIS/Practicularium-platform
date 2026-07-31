/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Workflow Service
 * ============================================================
 */

const {
    createReturnRequest
} = require("./return-builder");

const fiscalEngine =
    require("./fiscal-engine");

const SaveReceiptPdf =
    require("./save-pdf");

const {
    buildFiscalResult
} = require("./fiscal-result-builder");

const {
    getOrderByNumber,
    saveReturnResult
} = require("../order-repository");

const {
    createReturnAct
} = require("./return-act/return-act-service");

async function runReturnWorkflow(

    orderNumber

) {

    try {

        console.log();

        console.log(
            "========================================"
        );

        console.log(
            "RETURN WORKFLOW"
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
         * Protection Against Duplicate Return
         * ----------------------------------------------------
         */

        if (

            order.return?.receiptId

        ) {

            console.log();

            console.log(
                "========================================"
            );

            console.log(
                "DUPLICATE RETURN BLOCKED"
            );

            console.log(
                "========================================"
            );

            console.log(
                "Order:",
                order.meta.orderNumber
            );

            console.log(
                "Return Receipt ID:",
                order.return.receiptId
            );

            console.log(
                "Return Receipt Number:",
                order.return.receiptNumber
            );

            console.log();

            return {

                success: false,

                provider: "checkbox",

                receiptId:

                    order.return.receiptId,

                receiptPath:

                    order.return.receiptPath ||

                    null,

                result:

                    null,

                error:

                    "Return receipt already exists."

            };

        }

        /**
        * ----------------------------------------------------
        * Build Return Request
        * ----------------------------------------------------
        */

        const returnRequest =

            await createReturnRequest(

                order

            );

        /**
         * ----------------------------------------------------
         * Fiscal Return
         * ----------------------------------------------------
         */

        const context =

            await fiscalEngine.fiscalize(

                returnRequest

            );

        /**
         * ----------------------------------------------------
         * Download Return PDF
         * ----------------------------------------------------
         */

        const pdfBuffer =

            await fiscalEngine.downloadReceiptPdf(

                context.receiptId

            );

        /**
         * ----------------------------------------------------
         * Save Return PDF
         * ----------------------------------------------------
         */

        const receiptPath =

            SaveReceiptPdf.save(

                order.meta.orderNumber,

                pdfBuffer,

                "ReturnReceipt.pdf"

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

                    false,

                error:

                    null

            });

        /**
         * ----------------------------------------------------
         * Generate Return Act
         * ----------------------------------------------------
         */

        const returnAct =

            createReturnAct(

                order,

                result,

                returnRequest.reason

            );

        /**
         * ----------------------------------------------------
         * Save Return Result
         * ----------------------------------------------------
         */

        await saveReturnResult(

            order.meta.orderNumber,

            {

                provider:

                    "checkbox",

                receiptId:

                    context.receiptId,

                receiptPath,

                actPath:

                    returnAct.filePath,

                result,

                reason:

                    returnRequest.reason

            }

        );

        console.log();

        console.log(
            "RETURN RESULT SAVED"
        );

        console.log();

        console.log(
            "RETURN WORKFLOW COMPLETED"
        );

        return {

            success: true,

            provider:

                "checkbox",

            receiptId:

                context.receiptId,

            receiptPath,

            actPath:

                returnAct.filePath,

            result,

            error:

                null

        };

    }

    catch (error) {

        console.log();

        console.log(
            "RETURN WORKFLOW ERROR"
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

            actPath:

                null,

            result:

                null,

            error:

                error.message

        };

    }

}

module.exports = {

    runReturnWorkflow

};