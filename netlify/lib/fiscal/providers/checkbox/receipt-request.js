/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Receipt Request
 * ============================================================
 */

class CheckboxReceiptRequest {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(client) {

        this.client = client;

    }

    /**
     * --------------------------------------------------------
     * Sends Receipt
     * --------------------------------------------------------
     */

    async send(
        checkboxRequest
    ) {

        console.log();

        console.log(
            "SENDING RECEIPT..."
        );

        console.log();

        console.log(
            JSON.stringify(
                checkboxRequest,
                null,
                4
            )
        );

        return await this.client.request(

            "/receipts/sell",

            {

                method: "POST",

                body: JSON.stringify(
                    checkboxRequest
                )

            }

        );

    }

}

module.exports =
    CheckboxReceiptRequest;