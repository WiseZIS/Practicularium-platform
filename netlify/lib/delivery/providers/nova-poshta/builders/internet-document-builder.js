/**
 * ============================================================
 * Nova Poshta
 * Internet Document Builder
 * ============================================================
 */

const { buildSender } = require("./internet-document/sender-builder");
const { buildRecipient } = require("./internet-document/recipient-builder");
const { buildService } = require("./internet-document/service-builder");
const { buildPackage } = require("./internet-document/package-builder");
const { buildMethodProperties } = require("./internet-document/method-properties-builder");

function buildInternetDocument(shipment) {
	
	console.log("=== INTERNET DOCUMENT BUILDER START ===");

    const document = {

        sender: buildSender(shipment.sender),

        recipient: buildRecipient(shipment.recipient),

        service: buildService(shipment.service),

        package: buildPackage(shipment.package),

        options: shipment.options

    };

    console.log("");
    console.log("DOCUMENT RECIPIENT:");
    console.log(document.recipient);

    return {

        document,

        methodProperties: buildMethodProperties(document)

    };

}

module.exports = {

    buildInternetDocument

};