/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt Status
 * ============================================================
 */

class CheckboxReceiptStatus {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(
        client
    ) {

        this.client = client;

    }

    /**
     * --------------------------------------------------------
     * Get Receipt
     * --------------------------------------------------------
     */

    async get(
        receiptId
    ) {

        console.log();

        console.log(
            "GETTING RECEIPT STATUS..."
        );

        console.log();

        console.log(
            `Receipt ID: ${receiptId}`
        );

        console.log();

        return await this.client.request(

            `/receipts/${receiptId}`,

            {

                method: "GET"

            }

        );

    }

}

module.exports =
    CheckboxReceiptStatus;