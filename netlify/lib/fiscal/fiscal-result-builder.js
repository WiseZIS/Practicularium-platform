/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Fiscal Result Builder
 * ============================================================
 */

function buildFiscalResult({

    provider = "checkbox",

    receipt,

    receiptPath = null,

    emailSent = false,

    error = null

}) {

    return {

        success:

            !error,

        provider,

        receiptId:

            receipt?.id || null,

        receiptNumber:

            receipt?.serial || null,

        fiscalNumber:

            receipt?.fiscal_code || null,

        receiptUrl:

            receipt?.pdf_url || null,

        receiptPath,

        emailSent,

        createdAt:

            receipt?.created_at ||

            new Date().toISOString(),

        error

    };

}

module.exports = {

    buildFiscalResult

};