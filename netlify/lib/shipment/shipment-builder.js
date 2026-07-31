const { DEFAULT_SENDER } = require("./sender-config");
const { buildRecipient } = require("./recipient-builder");
const { buildPackage } = require("./package-builder");
const { buildService } = require("./service-builder");

const {

    getSenderProfile

} = require("../delivery/providers/nova-poshta/services/counterparty-service");

const {

    createRecipient

} = require("../delivery/providers/nova-poshta/services/recipient-service");

async function buildShipment(order) {

    const packageData = buildPackage(order);

    const serviceData = buildService(order, packageData);

    const senderProfile = await getSenderProfile();

    const recipientProfile = await createRecipient({

        firstName: order.customer.firstName,

        lastName: order.customer.lastName,

        middleName: "",

        phone: order.customer.phone

    });
	
	console.log("");
    console.log("RECIPIENT PROFILE:");
    console.log(recipientProfile);

    return {

        sender: {

            ...DEFAULT_SENDER,

            ...senderProfile

        },

        recipient: {

            ...buildRecipient(order),

            ...recipientProfile

        },

        carrier: {

            method: order.delivery.method

        },

        service: serviceData,

        package: packageData,

        options: {}

    };

}

module.exports = {

    buildShipment

};