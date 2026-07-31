/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt PDF Test
 * ============================================================
 */

require("dotenv").config();

const checkboxClient =
    require("../netlify/lib/fiscal/providers/checkbox/client");

const storage =
    require("../netlify/lib/storage/storage");

(async () => {

    try {

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            "GET RECEIPT PDF TEST"
        );

        console.log(
            "======================================"
        );

        console.log();

        const orderNumber =
            "PR-20260726-103015";

        const receiptId =
            "2dcc90cb-3f97-43dc-9e8f-be7bbc99bf22";

        const pdf =

            await checkboxClient.getReceiptPdf(

                receiptId

            );

        const filePath =

            storage.saveReceiptPdf(

                orderNumber,

                pdf

            );

        console.log();

        console.log(
            "SUCCESS!"
        );

        console.log();

        console.log(
            "Receipt saved:"
        );

        console.log(
            filePath
        );

    }

    catch (error) {

        console.log();

        console.log(
            "TEST ERROR:"
        );

        console.error(error);

    }

})();