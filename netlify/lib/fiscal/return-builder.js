/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Builder
 * ============================================================
 */

const {
    createFiscalRequest
} = require("./fiscal-builder");

/**
 * ------------------------------------------------------------
 * Creates Return Request
 * ------------------------------------------------------------
 */

async function createReturnRequest(

    order

) {

    /**
     * --------------------------------------------------------
     * Create Standard Fiscal Request
     * --------------------------------------------------------
     */

    const request =

        await createFiscalRequest(

            order.meta.orderNumber

        );

    /**
     * --------------------------------------------------------
     * Return Mode
     * --------------------------------------------------------
     */

    request.return = true;

    request.relatedReceiptId =

        order.fiscal?.receiptId ||

        null;

    request.reason =

        order.return?.reason ||

        null;

    request.createdAt =

        new Date().toISOString();

    return request;

}

module.exports = {

    createReturnRequest

};