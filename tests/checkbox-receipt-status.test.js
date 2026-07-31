/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt Status Test
 * ============================================================
 */

require("dotenv").config();

const checkboxClient =
    require("../netlify/lib/fiscal/providers/checkbox/client");

/**
 * ------------------------------------------------------------
 * Receipt ID
 * ------------------------------------------------------------
 */

const RECEIPT_ID =
    "2dcc90cb-3f97-43dc-9e8f-be7bbc99bf22";

(async () => {

    try {

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            "GET RECEIPT TEST"
        );

        console.log(
            "======================================"
        );

        console.log();

        const receipt =
            await checkboxClient.getReceipt(

                RECEIPT_ID

            );

        console.log();

        console.log(
            "RECEIPT:"
        );

        console.dir(

            receipt,

            {

                depth: null

            }

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