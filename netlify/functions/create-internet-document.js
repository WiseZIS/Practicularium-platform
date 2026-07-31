const {

    buildOrder

} = require("../lib/order-builder");

const {

    buildShipment

} = require("../lib/shipment/shipment-builder");

const {

    buildInternetDocument

} = require("../lib/delivery/providers/nova-poshta/builders/internet-document-builder");

const {

    createInternetDocument

} = require("../lib/delivery/providers/nova-poshta/services/internet-document-service");

exports.handler = async () => {

    try {

        const order = buildOrder({

            firstName: "Іван",

            lastName: "Тестовий",

            phone: "380671112233",

            email: "test@example.com",

            book: "practicularium_ua",

            quantity: 1,

            delivery: "nova_poshta",

            payment: "cod-delivery-prepayment",

            country: "UA",

            city: "Київ",

            cityRef: "8d5a980d-391c-11dd-90d9-001a92567626",

            warehouse: "Відділення №1",

            warehouseRef: "511fcf98-e1c2-11e3-8c4a-0050568002cf"

        });

        const shipment = await buildShipment(order);

        const internetDocument = buildInternetDocument(shipment);

        const result = await createInternetDocument(

            internetDocument.methodProperties

        );

        return {

            statusCode: 200,

            body: JSON.stringify(result, null, 2)

        };

    }

    catch (error) {

        console.error(error);

        return {

            statusCode: 500,

            body: JSON.stringify({

                success: false,

                error: error.message

            })

        };

    }

};