/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Receipt PDF
 * ============================================================
 */

class CheckboxReceiptPdf {

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
     * Download PDF
     * --------------------------------------------------------
     */

    async get(

        receiptId

    ) {

        console.log();

        console.log(
            "DOWNLOADING RECEIPT PDF..."
        );

        console.log();

        console.log(
            `Receipt ID: ${receiptId}`
        );

        console.log();

        return await this.client.request(

            `/receipts/${receiptId}/pdf`,

            {

                method: "GET",

                headers: {

                    Accept:
                        "application/pdf"

                }

            }

        );

    }

}

module.exports =
    CheckboxReceiptPdf;