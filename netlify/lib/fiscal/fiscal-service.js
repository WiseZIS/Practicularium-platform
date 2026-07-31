/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * Fiscal Service
 * ============================================================
 */

const {
    createFiscalRequest
} = require("./fiscal-builder");

const provider =
    require("./mock-provider");

/**
 * ------------------------------------------------------------
 * Creates Fiscal Receipt
 * ------------------------------------------------------------
 */

async function createFiscalReceipt(order) {

    const fiscalRequest =

        await createFiscalRequest(

            order.meta.orderNumber

        );

    console.log(
        "FISCAL REQUEST:"
    );

    console.log(fiscalRequest);

    const result =

        await provider.createReceipt(

            fiscalRequest

        );

    console.log(
        "PROVIDER RESULT:"
    );

    console.log(result);

    return result;

}

module.exports = {

    createFiscalReceipt

};