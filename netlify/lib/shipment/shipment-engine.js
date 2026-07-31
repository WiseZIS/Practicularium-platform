/**
 * ============================================================
 * PRACTICULARIUM Platform 2.0
 * Shipping Engine
 * ============================================================
 */

const {

    getOrderByNumber

} = require("../order-repository");

const {

    buildShipment

} = require("./shipment-builder");

const {

    buildShipmentResult

} = require("./shipment-result-builder");

const {

    saveShipmentResult

} = require("./save-shipment-result");

const {

    buildInternetDocument

} = require("../delivery/providers/nova-poshta/builders/internet-document-builder");

const {

    createInternetDocument

} = require("../delivery/providers/nova-poshta/services/internet-document-service");

async function createShipment(orderNumber) {

    console.log("");
    console.log("================================");
    console.log("SHIPPING ENGINE");
    console.log("================================");

    console.log("Order Number:", orderNumber);

    const record = await getOrderByNumber(orderNumber);

    console.log("");
    console.log("ORDER FROM DATABASE:");
    console.log(record);

    const shipment = await buildShipment(record.data);

    console.log("");
    console.log("SHIPMENT:");
    console.log(shipment);

    const internetDocument = buildInternetDocument(shipment);

    console.log("");
    console.log("INTERNET DOCUMENT:");
    console.log(internetDocument.document);

    console.log("");
    console.log("METHOD PROPERTIES:");
    console.log(internetDocument.methodProperties);

    console.log("");
    console.log("CREATE INTERNET DOCUMENT...");

    const apiResponse = await createInternetDocument(

        internetDocument.methodProperties

    );

    const shipmentResult = buildShipmentResult(apiResponse);

    console.log("");
    console.log("SHIPMENT RESULT:");
    console.log(shipmentResult);

    await saveShipmentResult(

        orderNumber,

        shipmentResult

    );

    console.log("");
    console.log("SHIPMENT RESULT SAVED");

    console.log("");
    console.log("NOVA POSHTA RESPONSE:");
    console.log(apiResponse);

    return {

        success: true,

        orderNumber,

        shipment,

        shipmentResult,

        internetDocument,

        apiResponse

    };

}

module.exports = {

    createShipment

};