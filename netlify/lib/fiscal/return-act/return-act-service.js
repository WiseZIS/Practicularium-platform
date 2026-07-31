/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Return Act Service
 * ============================================================
 */

const {
    createReturnActModel
} = require("./return-act-builder");

const {
    generateReturnAct
} = require("./return-act-generator");

const {
    saveOrderDocument
} = require("../../documents/storage");

function createReturnAct(

    order,

    returnResult,

    reason

) {

    const model = createReturnActModel(

        order,

        returnResult,

        reason

    );

    const document = generateReturnAct(

        model

    );

    const filePath = saveOrderDocument(

        order.meta.orderNumber,

        "ReturnAct.docx",

        document

    );

    return {

        model,

        filePath

    };

}

module.exports = {

    createReturnAct

};