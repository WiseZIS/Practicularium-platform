/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Checkbox Provider
 * Client
 * ============================================================
 */

const CheckboxHttpClient =
    require("./http-client");

const CheckboxAuth =
    require("./auth");

const CheckboxShift =
    require("./shift");

const CheckboxReceipt =
    require("./receipt");

const CheckboxReceiptStatus =
    require("./receipt-status");

const CheckboxReceiptWaiter =
    require("./receipt-waiter");

const CheckboxReceiptPdf =
    require("./receipt-pdf");

/**
 * ------------------------------------------------------------
 * Checkbox Client
 * ------------------------------------------------------------
 */

class CheckboxClient {

    /**
     * --------------------------------------------------------
     * Constructor
     * --------------------------------------------------------
     */

    constructor() {

        this.token = null;

        this.shift = null;

        this.http =
            new CheckboxHttpClient(this);

        this.auth =
            new CheckboxAuth(this);

        this.shiftManager =
            new CheckboxShift(this);

        this.receipt =
            new CheckboxReceipt(this);

        this.receiptStatus =
            new CheckboxReceiptStatus(this);

        this.receiptWaiter =
            new CheckboxReceiptWaiter(this);

        this.receiptPdf =
            new CheckboxReceiptPdf(this);

    }

    /**
     * --------------------------------------------------------
     * HTTP Request
     * --------------------------------------------------------
     */

    async request(
        endpoint,
        options = {}
    ) {

        return await this.http.request(

            endpoint,

            options

        );

    }

    /**
     * --------------------------------------------------------
     * Saves Access Token
     * --------------------------------------------------------
     */

    saveToken(
        token
    ) {

        this.token = token;

    }

    /**
     * --------------------------------------------------------
     * Creates Fiscal Receipt
     * --------------------------------------------------------
     */

    async createReceipt(
        fiscalRequest
    ) {

        await this.auth.authenticate();

        await this.shiftManager.ensure();

        return await this.receipt.create(

            fiscalRequest

        );

    }

    /**
     * --------------------------------------------------------
     * Waits Until Receipt Is DONE
     * --------------------------------------------------------
     */

    async waitReceiptDone(
        receiptId
    ) {

        await this.auth.authenticate();

        return await this.receiptWaiter.wait(

            receiptId

        );

    }

    /**
     * --------------------------------------------------------
     * Gets Receipt Status
     * --------------------------------------------------------
     */

    async getReceipt(
        receiptId
    ) {

        await this.auth.authenticate();

        return await this.receiptStatus.get(

            receiptId

        );

    }

    /**
     * --------------------------------------------------------
     * Gets Receipt PDF
     * --------------------------------------------------------
     */

    async getReceiptPdf(
        receiptId
    ) {

        await this.auth.authenticate();

        return await this.receiptPdf.get(

            receiptId

        );

    }

}

module.exports =
    new CheckboxClient();