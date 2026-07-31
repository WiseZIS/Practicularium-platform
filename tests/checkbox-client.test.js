/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Client Test
 * ============================================================
 */

require("dotenv").config();

const checkboxClient =
    require("../netlify/lib/fiscal/providers/checkbox/client");

/**
 * ------------------------------------------------------------
 * TEST MODE
 * ------------------------------------------------------------
 *
 * SALE
 * RETURN
 *
 */

const TEST_MODE = "RETURN";

/**
 * ------------------------------------------------------------
 * ORIGINAL RECEIPT
 * ------------------------------------------------------------
 */

const ORIGINAL_RECEIPT_ID =
    "2dcc90cb-3f97-43dc-9e8f-be7bbc99bf22";

(async () => {

    try {

        const internalFiscalRequest = {

            customer: {

                name: "Ivan Zaitsev",

                email: "ivan@test.com",

                phone: "+380501112233"

            },

            goods: [

                {

                    code: "BOOK-001",

                    name: "PRACTICULARIUM",

                    quantity: 1,

                    price: 65000,

                    tax: 8,

                    isReturn:
                        TEST_MODE === "RETURN"

                }

            ],

            payments: [

                {

                    type: "CASH",

                    value: 65000

                }

            ]

        };

        /**
         * ----------------------------------------------------
         * Return Mode
         * ----------------------------------------------------
         */

        if (TEST_MODE === "RETURN") {

            internalFiscalRequest.relatedReceiptId =
                ORIGINAL_RECEIPT_ID;

            internalFiscalRequest.technicalReturn =
                true;

        }

        console.log();

        console.log(
            "======================================"
        );

        console.log(
            `TEST MODE: ${TEST_MODE}`
        );

        console.log(
            "======================================"
        );

        console.log();

        const result =
            await checkboxClient.createReceipt(
                internalFiscalRequest
            );

        console.log();

        console.log(
            "CLIENT RESULT:"
        );

        console.dir(
            result,
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