/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Engine
 * Mock Fiscal Provider
 * ============================================================
 */

async function createReceipt(fiscalRequest) {

    console.log(
        "MOCK PROVIDER RECEIVED:"
    );

    console.log(fiscalRequest);

    return {

        success: true,

        fiscalNumber: "MOCK-000001",

        receiptNumber: "TEST-000001",

        createdAt: new Date().toISOString()

    };

}

module.exports = {

    createReceipt

};