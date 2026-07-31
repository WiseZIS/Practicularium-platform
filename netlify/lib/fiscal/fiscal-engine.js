/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * ============================================================
 */

const FiscalUUID =
    require("./uuid");

const checkboxClient =
    require("./providers/checkbox/client");

class FiscalEngine {

    /**
     * --------------------------------------------------------
     * Fiscalize Order
     * --------------------------------------------------------
     */

    async fiscalize(

        fiscalRequest

    ) {

        /**
         * ----------------------------------------------------
         * Generate Fiscal UUID
         * ----------------------------------------------------
         */

        fiscalRequest.id =

            FiscalUUID.generate();

        console.log();

        console.log(
            "FISCAL UUID:"
        );

        console.log(
            fiscalRequest.id
        );

        /**
         * ----------------------------------------------------
         * Create Receipt
         * ----------------------------------------------------
         */

        const createResult =

            await checkboxClient.createReceipt(

                fiscalRequest

            );

        console.log();

        console.log(
            "CREATE RECEIPT RESULT:"
        );

        console.dir(

            createResult,

            {

                depth: null,

                colors: false

            }

        );

        /**
         * ----------------------------------------------------
         * Resolve Receipt ID
         * ----------------------------------------------------
         */

        const receiptId =

            createResult?.id ||

            createResult?.receipt_id ||

            createResult?.receiptId ||

            fiscalRequest.id;

        console.log();

        console.log(
            "RECEIPT ID:"
        );

        console.log(
            receiptId
        );

        /**
         * ----------------------------------------------------
         * Wait Until Receipt Is Ready
         * ----------------------------------------------------
         */

        await checkboxClient.waitReceiptDone(

            receiptId

        );

        /**
         * ----------------------------------------------------
         * Get Final Receipt
         * ----------------------------------------------------
         */

        const receipt =

            await checkboxClient.getReceipt(

                receiptId

            );

        /**
         * ----------------------------------------------------
         * Fiscal Context
         * ----------------------------------------------------
         */

        return {

            fiscalRequest,

            createResult,

            receipt,

            receiptId

        };

    }

    /**
     * --------------------------------------------------------
     * Download Receipt PDF
     * --------------------------------------------------------
     */

    async downloadReceiptPdf(

        receiptId

    ) {

        return await checkboxClient.getReceiptPdf(

            receiptId

        );

    }

}

module.exports =
    new FiscalEngine();