/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Receipt Component
 * ============================================================
 */

const CheckboxReceiptMapper =
    require("./receipt-mapper");

const CheckboxReceiptRequest =
    require("./receipt-request");

class CheckboxReceipt {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor(client) {

        this.client = client;

        this.mapper =
            new CheckboxReceiptMapper();

        this.request =
            new CheckboxReceiptRequest(client);

    }

    /**
     * --------------------------------------------------------
     * Creates Fiscal Receipt
     * --------------------------------------------------------
     */

    async create(
        fiscalRequest
    ) {

        console.log();

        console.log(
            "Creating fiscal receipt..."
        );

        console.log();

        console.log("FISCAL REQUEST:");

        console.dir(
               fiscalRequest,
               {
                   depth: null
               }
        );

        const checkboxRequest =
            this.mapper.map(
                fiscalRequest
            );

        console.log();

        console.log(
            "CHECKBOX REQUEST:"
        );

        console.log(
            checkboxRequest
        );

        return await this.request.send(
            checkboxRequest
        );

    }

}

module.exports =
    CheckboxReceipt;